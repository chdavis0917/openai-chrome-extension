import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Highlight, HighlightSchema } from './entities/highlight.entity';
import { HighlightsController } from './highlights.controller';
import { HighlightsService } from './highlights.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Highlight.name, schema: HighlightSchema },
    ]),
  ],
  controllers: [HighlightsController],
  providers: [HighlightsService],
  exports: [HighlightsService],
})
export class HighlightsModule {}
