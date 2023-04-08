import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSummaryDto } from './dto/create-summary.dto';
import { Summary } from './summary.schema';

@Injectable()
export class SummariesRepository {
  constructor(@InjectModel(Summary.name) private summaryModel: Model<Summary>) {}

  async create(createSummaryDto: CreateSummaryDto): Promise<Summary> {
    const createdSummary = new this.summaryModel(createSummaryDto);
    return createdSummary.save();
  }

  async findAll(): Promise<Summary[]> {
    return this.summaryModel.find().exec();
  }

  async findById(id: string): Promise<Summary> {
    return this.summaryModel.findById(id).exec();
  }

  async update(id: string, createSummaryDto: CreateSummaryDto): Promise<Summary> {
    return this.summaryModel.findByIdAndUpdate(id, createSummaryDto, { new: true }).exec();
  }

  async delete(id: string): Promise<void> {
    await this.summaryModel.findByIdAndRemove(id).exec();
  }
}
