import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Highlight, HighlightSchema } from './highlight.model';
import { HighlightsController } from './highlights.controller';
import { HighlightsService } from './highlights.service';
import { OpenAIService } from './openai';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Highlight', schema: HighlightSchema }]),
    ConfigModule // Add ConfigModule here
  ],
  controllers: [HighlightsController],
  providers: [HighlightsService, OpenAIService, ConfigService], // Add ConfigService to the list of providers
})
export class HighlightsModule {}
