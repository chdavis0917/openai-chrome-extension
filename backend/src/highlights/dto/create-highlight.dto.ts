import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateHighlightDto {
  @IsNotEmpty()
  @IsUUID()
  readonly summaryId: string;

  @IsNotEmpty()
  @IsString()
  readonly content: string;

  @IsNotEmpty()
  @IsString()
  readonly color: string;

  @IsNotEmpty()
  @IsString()
  readonly url: string;

  @IsNotEmpty()
  @IsString()
  readonly text: string;

  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  readonly summary: string;

  @IsNotEmpty()
  @IsUUID()
  readonly userId: string;

  @IsNotEmpty()
  @IsString()
  readonly comment: string;

  constructor(
    summaryId: string,
    userId: string,
    content: string,
    color: string,
    url: string,
    text: string,
    title: string,
    summary: string,
    comment: string,
  ) {
    this.summaryId = summaryId;
    this.userId = userId;
    this.content = content;
    this.color = color;
    this.url = url;
    this.text = text;
    this.title = title;
    this.summary = summary;
    this.comment = comment;
  }
}
