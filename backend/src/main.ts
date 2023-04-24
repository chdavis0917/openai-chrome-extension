import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { join } from 'path';
import * as express from 'express';
import cors from 'cors';


async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  app.use(cors());;

  // Serve frontend files
  app.use(express.static(join(__dirname, '..', 'frontend')));

  await app.listen(3001);
}

bootstrap();
