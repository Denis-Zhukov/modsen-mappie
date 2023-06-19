import { Module } from '@nestjs/common';
import { PlacesModule } from '../places/places.module';
import { AuthModule } from '../auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModel } from '../auth/auth.model';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PlacesModule,
    AuthModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      uri: process.env.POSTGRES_DB + '?sslmode=require',
      models: [AuthModel],

      synchronize: true,
      sync: { alter: true },
      autoLoadModels: true,

      ssl: true
    })
  ]
})
export class AppModule {
}
