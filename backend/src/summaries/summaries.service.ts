import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSummaryDto } from './dto/create-summary.dto';
import { UpdateSummaryDto } from './dto/update-summary.dto';
import { Summary } from './schemas/summary.schema';

@Injectable()
export class SummariesService {
  constructor(
    @InjectModel(Summary.name) private summaryModel: Model<Summary>,
  ) {}

  async findAll(): Promise<Summary[]> {
    return this.summaryModel.find().exec();
  }

  async findOne(id: string): Promise<Summary | null> {
    return this.summaryModel.findById(id).exec();
  }
  

  async create(createSummaryDto: CreateSummaryDto): Promise<Summary> {
    const summary = new this.summaryModel(createSummaryDto);
    return summary.save();
  }

  async update(id: string, updateSummaryDto: UpdateSummaryDto): Promise<Summary | null> {
    return this.summaryModel.findByIdAndUpdate(id, updateSummaryDto, { new: true }).exec();
}


  async delete(id: string): Promise<void> {
    await this.summaryModel.findByIdAndDelete(id).exec();
  }
}
