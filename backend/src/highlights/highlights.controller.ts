import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { HighlightsService } from './highlights.service';
import { HighlightDto } from './dto/highlight.dto';

@Controller('highlights')
export class HighlightsController {
  constructor(private readonly highlightsService: HighlightsService) {}

  @Post()
  async create(@Body() createHighlightDto: HighlightDto) {
    return this.highlightsService.create(createHighlightDto);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.highlightsService.findById(id);
  }

  @Put(':id')
  async updateById(@Param('id') id: string, @Body() updateHighlightDto: HighlightDto) {
    return this.highlightsService.updateById(id, updateHighlightDto);
  }

  @Delete(':id')
  async deleteById(@Param('id') id: string) {
    return this.highlightsService.deleteById(id);
  }
}
