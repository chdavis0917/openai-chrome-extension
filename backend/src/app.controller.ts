import { Controller, Post, Body, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { Highlight } from './highlight.model';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/highlight')
  async highlight(@Body() body: Highlight) {
    return this.appService.processHighlight(body);
  }

  @Delete('/highlight/:id')
  async deleteHighlight(@Param('id') id: string) {
    return this.appService.deleteHighlight(id);
  }

}
