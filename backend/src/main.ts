import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { MongoExceptionFilter } from './common/mongo-exception.filter';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  
  // ValidationPipe will be used globally to validate input payloads
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  
  // Adding the exception filter for MongoDB
  app.useGlobalFilters(new MongoExceptionFilter());
  
  // Start listening on port specified in environment variable or 3000
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
