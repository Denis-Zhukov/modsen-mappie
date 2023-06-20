import { Module } from '@nestjs/common';
import { PlacesModule } from '../places/places.module';
import { AuthModule } from '../auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModel } from '../auth/auth.model';
import { BookmarksModel } from '../bookmarks/bookmarks.model';
import { BookmarksModule } from '../bookmarks/bookmarks.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PlacesModule,
    AuthModule,
    BookmarksModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      dialectModule: require('pg'),
      uri: process.env.POSTGRES_DB + '?sslmode=require',
      models: [AuthModel, BookmarksModel],

      synchronize: true,
      sync: { alter: true },
      autoLoadModels: true,

      ssl: true
    })
  ]
})
export class AppModule {
}
