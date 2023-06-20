import { Injectable } from '@nestjs/common';
import { BookmarksModel } from './bookmarks.model';
import { OverpassNodeDto } from '../places/dto/overpass-node.dto';

@Injectable()
export class BookmarksService {
  public async getFavoritesPlaces(personId: string) {
    const bookmarks = await BookmarksModel.findAll({ where: { personId } });
    if (bookmarks.length === 0) return [];
    const queryString = `[out:json];
    (
      node(id: ${bookmarks.map(b => b.placeId).join(', ')});
    );
     out body;`;
    const url = `https://overpass-api.de/api/interpreter?data=${encodeURIComponent(queryString)}`;
    const response = await fetch(url);
    const res = await response.json();
    return res.elements as OverpassNodeDto[];
  }

  public async toggleFavoritePlace(personId: string, placeId: number) {
    const [instance, created] = await BookmarksModel.findOrCreate({
      where: { personId, placeId }
    });

    if (!created) await instance.destroy();

    return { added: created, deleted: !created };
  }
}
