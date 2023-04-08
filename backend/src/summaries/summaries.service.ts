import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSummaryDto } from './dto/create-summary.dto';
import { UpdateSummaryDto } from './dto/update-summary.dto';
import { Summary, SummaryDocument } from './schemas/summary.schema';

@Injectable()
export class SummariesService {
  constructor(
    @InjectModel(Summary.name) private summaryModel: Model<SummaryDocument>,
  ) {}

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

  async update(id: string, updateSummaryDto: UpdateSummaryDto): Promise<Summary> {
    return this.summaryModel.findByIdAndUpdate(id, updateSummaryDto, { new: true });
  }

  async delete(id: string): Promise<void> {
    await this.summaryModel.findByIdAndDelete(id).exec();
  }
}
