import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Highlight {
  @Prop({ required: true })
  summaryId: string;

  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  content: string;

  @Prop()
  createdDate: Date;

  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  text: string;

  @Prop({ required: true })
  title: string;

  @Prop()
  summary: string;

  @Prop()
  comment: string;

  constructor(
    summaryId: string,
    userId: string,
    content: string,
    url: string,
    text: string,
    title: string,
    summary: string,
    comment: string,
    createdDate: Date = new Date(),
  ) {
    this.summaryId = summaryId;
    this.userId = userId;
    this.content = content;
    this.createdDate = createdDate;
    this.url = url;
    this.text = text;
    this.title = title;
    this.summary = summary;
    this.comment = comment;
  }
}

export const HighlightSchema = SchemaFactory.createForClass(Highlight);

export type HighlightDocument = Highlight & Document;
