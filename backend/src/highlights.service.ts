import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Highlight, HighlightDocument } from './highlight.model';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class HighlightsService {
  constructor(
    @InjectModel(Highlight.name)
    private readonly highlightModel: Model<Highlight>,
    private readonly configService: ConfigService,
  ) {}

  async createHighlight(
    url: string,
    highlightedText: string,
  ): Promise<HighlightDocument> {
    const highlight = new this.highlightModel({ url, highlightedText: highlightedText });
    return await highlight.save();
  }
  

  async findAll(): Promise<Highlight[]> {
    return await this.highlightModel.find().exec();
  }

  async deleteHighlight(_id: string): Promise<Highlight> {
    const highlight = await this.highlightModel.findOneAndRemove({ _id: new Types.ObjectId(_id) }).exec();
    if (!highlight) {
      throw new Error(`Highlight with _id ${_id} not found`);
    }
    return highlight;
}

  
  

  async updateHighlight(id: number, url: string, highlightedText: string): Promise<Highlight> {
    const highlight = await this.highlightModel.findOne({ id }).exec();
    if (!highlight) {
      throw new Error(`Highlight with ID ${id} not found`);
    }
    highlight.url = url;
    highlight.highlightedText = highlightedText;
    return await highlight.save();
  }
}
