import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateSummaryDto } from './dto/create-summary.dto';
import { UpdateSummaryDto } from './dto/update-summary.dto';
import { SummariesService } from './summaries.service';
import { Summary } from './interfaces/summary.interface';

@Controller('summaries')
export class SummariesController {
  constructor(private summariesService: SummariesService) {}

  @Get()
  async findAll(): Promise<Summary[]> {
    return this.summariesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Summary> {
    return this.summariesService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async create(@Body() createSummaryDto: CreateSummaryDto): Promise<Summary> {
    return this.summariesService.create(createSummaryDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  async update(@Param('id') id: string, @Body() updateSummaryDto: UpdateSummaryDto): Promise<Summary> {
    return this.summariesService.update(id, updateSummaryDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.summariesService.delete(id);
  }
}
