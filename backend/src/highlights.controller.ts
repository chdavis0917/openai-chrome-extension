import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { HighlightsService } from './highlights.service';
import { OpenAIService } from './openai';

@Controller('api')
export class HighlightsController {
  constructor(
    private readonly highlightsService: HighlightsService,
    private readonly openaiService: OpenAIService,
  ) {}

  @Post('summary')
  async getSummary(@Body() body: { url: string, highlightedText: string }) {
    const summary = await this.openaiService.generateSummary(body.highlightedText);
    const newHighlight = await this.highlightsService.createHighlight(
      body.url,
      body.highlightedText
    );
    return newHighlight;
  }

  

  @Get('highlights')
  async findAll() {
    const highlights = await this.highlightsService.findAll();
    const summaryPromises = highlights.map((highlight) =>
      this.openaiService.generateSummary(highlight.highlightedText),
    );
    const summaries = await Promise.all(summaryPromises);
    return highlights.map((highlight, index) => ({
      ...highlight.toJSON(),
      summary: summaries[index],
    }));
  }

  @Delete('highlights/:_id')
  async deleteHighlight(@Param('_id') _id: string) {
    await this.highlightsService.deleteHighlight(_id);
    return { message: `Highlight with id ${_id} has been deleted` };
  }
  
}
