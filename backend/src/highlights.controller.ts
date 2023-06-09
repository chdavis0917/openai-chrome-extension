import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { HighlightsService } from './highlights.service';
import { OpenAIService } from './openai';
import * as express from 'express';
import { Request, Response, NextFunction } from 'express';

@Controller('api')
export class HighlightsController {
  constructor(
    private readonly highlightsService: HighlightsService,
    private readonly openaiService: OpenAIService,
  ) {}

  @Post('summary')
  async getSummary(@Body() body: { url: string, highlightedText: string }) {
    const summary = await this.openaiService.generateSummary(body.highlightedText);
    if (summary.text) {
      const newHighlight = await this.highlightsService.createHighlight(
        body.url,
        body.highlightedText,
        summary.text
      );
      return newHighlight;
    }
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
  
  configure(consumer: import('@nestjs/common').MiddlewareConsumer) {
    consumer
      .apply(express.json(), express.urlencoded({ extended: true }), express.static('public'), (req: Request, res: Response, next: NextFunction) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        next();
      })
      .forRoutes('*');
  }
}
