import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { Highlight } from './highlight.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/highlight')
  async highlight(@Body() body: Highlight) {
    return this.appService.processHighlight(body);
  }
}
