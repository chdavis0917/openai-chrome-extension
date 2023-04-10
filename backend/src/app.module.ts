import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HighlightsModule } from './highlights.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Highlight, HighlightSchema } from './highlight.model';
import { HighlightsService } from './highlights.service';
import { OpenAIService } from './openai';


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI || 'mongodb://localhost/highlights'),
    MongooseModule.forFeature([{ name: Highlight.name, schema: HighlightSchema }]),
    HighlightsModule,
  ],
  controllers: [AppController],
  providers: [AppService, HighlightsService, OpenAIService],
})
export class AppModule {}
