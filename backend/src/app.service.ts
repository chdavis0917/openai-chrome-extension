import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Highlight } from './highlight.model';
import { OpenAIService } from './openai';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('Highlight') private readonly highlightModel: Model<Highlight>,
    private readonly openai: OpenAIService,
  ) {}

  async processHighlight(body: { url: string, highlightedText: string }) {
    const summary = await this.openai.generateSummary(body.highlightedText);
    const highlight = new this.highlightModel({ url: body.url, highlightedText: body.highlightedText, summary });
    await highlight.save();
    return { summary };
}

}
