import { ApiProperty } from '@nestjs/swagger';

export class SummaryDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  highlightedText: string;

  @ApiProperty()
  summary: string;

  @ApiProperty()
  createdAt: Date;
}
