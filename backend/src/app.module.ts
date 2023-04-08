import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { HighlightsModule } from './highlights/highlights.module';
import { SummariesModule } from './summaries/summaries.module';

@Module({
  imports: [
    ConfigModule.forRoot(), // Import config module to load environment variables
    TypeOrmModule.forRoot(), // Import TypeORM module to connect to MongoDB
    HighlightsModule, // Import Highlights module
    SummariesModule, // Import Summaries module
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
