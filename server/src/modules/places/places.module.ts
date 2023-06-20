import { Module } from '@nestjs/common';
import { PlacesService } from './places.service';
import { DataTransformService } from './data-transform.service';
import { PlacesController } from './places.controller';

@Module({
  controllers: [PlacesController],
  providers: [PlacesService, DataTransformService],
  exports:[DataTransformService]
})
export class PlacesModule {
}
