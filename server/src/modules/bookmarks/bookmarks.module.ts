import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { BookmarksController } from './bookmarks.controller';
import { CheckAuthMiddleware } from '../../middlewares/check-auth.middleware';
import { BookmarksService } from './bookmarks.service';
import { DataTransformService } from '../places/data-transform.service';

@Module({
  controllers: [BookmarksController],
  providers: [BookmarksService, DataTransformService],
})
export class BookmarksModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckAuthMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
