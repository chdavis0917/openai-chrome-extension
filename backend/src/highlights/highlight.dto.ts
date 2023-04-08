import { ApiProperty } from '@nestjs/swagger';

export class HighlightDto {
  @ApiProperty()
  readonly id: string;

  @ApiProperty()
  readonly summaryId: string;

  @ApiProperty()
  readonly text: string;

  @ApiProperty()
  readonly createdAt: Date;

  constructor(id: string, summaryId: string, text: string, createdAt: Date) {
    this.id = id;
    this.summaryId = summaryId;
    this.text = text;
    this.createdAt = createdAt;
  }
}
