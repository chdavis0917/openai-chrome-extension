import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes, ValidationPipe, NotFoundException } from '@nestjs/common';
import { CreateSummaryDto } from './dto/create-summary.dto';
import { UpdateSummaryDto } from './dto/update-summary.dto';
import { SummariesService } from './summaries.service';
import { Summary } from './schemas/summary.schema';
import { ApiTags } from '@nestjs/swagger';

@Controller('summaries')
@ApiTags('summaries')
export class SummariesController {
  constructor(private summariesService: SummariesService) {}

  @Get()
  async findAll(): Promise<Summary[]> {
    return this.summariesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Summary> {
    const summary = await this.summariesService.findOne(id);
    if (!summary) {
      throw new NotFoundException(`Summary with id ${id} not found`);
    }
    return summary;
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createSummaryDto: CreateSummaryDto): Promise<Summary> {
    return this.summariesService.create(createSummaryDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(@Param('id') id: string, @Body() updateSummaryDto: UpdateSummaryDto): Promise<Summary> {
    return this.summariesService.update(id, updateSummaryDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.summariesService.delete(id);
  }
}
