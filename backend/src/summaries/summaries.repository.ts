import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSummaryDto } from './dto/create-summary.dto';
import { Summary } from './schemas/summary.schema';

@Injectable()
export class SummariesRepository {
  constructor(
    @InjectModel(Summary.name) private summaryModel: Model<Summary>,
  ) {}

  async create(createSummaryDto: CreateSummaryDto): Promise<Summary> {
    const createdSummary = new this.summaryModel(createSummaryDto);
    return createdSummary.save();
  }

  async findAll(): Promise<Summary[]> {
    return this.summaryModel.find().exec();
  }

  async findById(id: string): Promise<Summary> {
    const summary = await this.summaryModel.findById(id).exec();
    if (!summary) {
      throw new NotFoundException(`Summary with id ${id} not found`);
    }
    return summary;
  }

  async update(
    id: string,
    createSummaryDto: CreateSummaryDto,
  ): Promise<Summary> {
    const summary = await this.summaryModel.findById(id).exec();
    if (!summary) {
      throw new NotFoundException(`Summary with id ${id} not found`);
    }
    summary.title = createSummaryDto.title;
    summary.content = createSummaryDto.content;
    return summary.save();
  }

  async delete(id: string): Promise<void> {
    await this.summaryModel.findByIdAndRemove(id).exec();
  }
}
