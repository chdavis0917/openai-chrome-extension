import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Highlight, HighlightSchema } from './highlight.model';
import { HighlightsController } from './highlights.controller';
import { HighlightsService } from './highlights.service';
import { OpenAIService } from './openai';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Highlight', schema: HighlightSchema }]),
  ],
  controllers: [HighlightsController],
  providers: [HighlightsService, OpenAIService],
})
export class HighlightsModule {}
