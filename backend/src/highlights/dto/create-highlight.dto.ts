import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateHighlightDto {
  @IsNotEmpty()
  @IsUUID()
  summaryId: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsString()
  color: string;
}
