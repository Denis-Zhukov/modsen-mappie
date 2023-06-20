import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['https://guide-modsen.vercel.app', 'http://localhost:3000'],
    credentials: true
  });
  app.useGlobalPipes(new ValidationPipe());
  const cookieParser = require('cookie-parser'); //vercel has problem with import
  app.use(cookieParser());
  await app.listen(8000);
}

bootstrap();
