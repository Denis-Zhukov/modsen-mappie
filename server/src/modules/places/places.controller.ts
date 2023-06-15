import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { GetAllPlacesDto } from './dto/get-all-places.dto';
import { PlacesService } from './places.service';
import { DataTransformService } from './data-transform.service';
import { GetPlacesByCategoriesDto } from './dto/get-places-by-categories.dto';
import { filtersByCategory } from '../../constants/filters-by-category';

@Controller()
export class PlacesController {
  constructor(
    private readonly placesService: PlacesService,
    private readonly dataTransformService: DataTransformService
  ) {
  }

  @Get('/all-places')
  public async getPlaces(@Query() { latitude, longitude, radius }: GetAllPlacesDto) {
    const categories = Object.keys(filtersByCategory);
    const places = await this.placesService.getPlacesByCategories(+latitude, +longitude, +radius, categories);
    return this.dataTransformService.transform(places, categories);
  }

  @Get('/places')
  public async getPlacesByCategories(@Query() { latitude, longitude, radius, categories }: GetPlacesByCategoriesDto) {
    const formattedCategories = categories.split(',');
    const invalidCategories = formattedCategories.filter(c => !(c in filtersByCategory));
    if (invalidCategories.length)
      throw new BadRequestException({
        statusCode: 400,
        message: `Invalid categories: ${invalidCategories.join(', ')}`,
        error: 'Bad Request'
      });

    const places = await this.placesService.getPlacesByCategories(+latitude, +longitude, +radius, formattedCategories);
    return this.dataTransformService.transform(places, formattedCategories);
  }
}
