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
}

export class UpdateSummaryDto {
  @ApiProperty()
  url: string;

  @ApiProperty()
  summary: string;

  @ApiProperty()
  highlightedText: string;
}
