import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Highlight, HighlightDocument } from './entities/highlight.entity';
import { CreateHighlightDto } from './dto/create-highlight.dto';
import { UpdateHighlightDto } from './dto/update-highlight.dto';

@Injectable()
export class HighlightsService {
  constructor(
    @InjectModel(Highlight.name)
    private readonly highlightModel: Model<HighlightDocument>,
  ) {}

  async create(createHighlightDto: CreateHighlightDto): Promise<Highlight> {
    const createdHighlight = new this.highlightModel(createHighlightDto);
    return createdHighlight.save();
  }

  async findAll(): Promise<Highlight[]> {
    return this.highlightModel.find().exec();
  }

  async findOne(id: string): Promise<Highlight> {
    const highlight = await this.highlightModel.findById(id).exec();
    if (!highlight) {
      throw new NotFoundException(`Highlight with ID ${id} not found`);
    }
    return highlight;
  }

  async update(
    id: string,
    updateHighlightDto: UpdateHighlightDto,
  ): Promise<Highlight> {
    const highlight = await this.highlightModel.findById(id).exec();
    if (!highlight) {
      throw new NotFoundException(`Highlight with ID ${id} not found`);
    }
    highlight.title = updateHighlightDto.title ?? highlight.title;
    highlight.text = updateHighlightDto.text ?? highlight.text;
    highlight.url = updateHighlightDto.url ?? highlight.url;
    return highlight.save();
  }

  async remove(id: string): Promise<void> {
    await this.highlightModel.findByIdAndDelete(id).exec();
  }
}
