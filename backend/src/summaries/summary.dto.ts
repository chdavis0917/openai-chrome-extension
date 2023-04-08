import { ApiProperty } from '@nestjs/swagger';

export class CreateSummaryDto {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  url: string;

  @ApiProperty()
  summary: string;

  @ApiProperty()
  highlightedText: string;

  constructor(userId: string, url: string, summary: string, highlightedText: string) {
    this.userId = userId;
    this.url = url;
    this.summary = summary;
    this.highlightedText = highlightedText;
  }
}

export class UpdateSummaryDto {
  @ApiProperty()
  url: string;

  @ApiProperty()
  summary: string;

  @ApiProperty()
  highlightedText: string;

  constructor(url: string, summary: string, highlightedText: string) {
    this.url = url;
    this.summary = summary;
    this.highlightedText = highlightedText;
  }
}
