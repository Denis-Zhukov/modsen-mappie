import { Injectable } from '@nestjs/common';
import { filtersByCategory } from '../../constants/filters-by-category';
import { OverpassNodeDto } from './dto/overpass-node.dto';

@Injectable()
export class PlacesService {
  public async getPlacesByCategories(latitude: number, longitude: number, radius: number, categories: string[]) {
    const queryString = `[out:json];
    (${categories.map(category => {
      const { and, or, exclude } = filtersByCategory[category];
      const filters = [
        ...and.map(condition => condition.values.length ? condition.values.map(v => `["${condition.field}"="${v}"]`).join('') : `["${condition.field}"]`),
        ...or.map(condition => `["${condition.field}"~"${condition.values.join('|')}"]`),
        ...exclude.map(condition => condition.values.map(v => `["${condition.field}"!="${v}"]`).join(''))
      ].join('');
      return `node(around:${radius},${latitude},${longitude})["name"]${filters};`;
    }).join('')});
    out center;`;
    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(queryString)}`;
    const response = await fetch(url);
    const res = await response.json();
    return res.elements as OverpassNodeDto[];
  }
}
