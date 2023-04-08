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
}
