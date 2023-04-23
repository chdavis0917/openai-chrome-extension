import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type HighlightDocument = Highlight & Document;

@Schema()
export class Highlight {
  @Prop({ type: Types.ObjectId, required: true, auto: true })
  _id: Types.ObjectId;

  @Prop()
  url: string;

  @Prop()
  highlightedText: string;

  @Prop()
  summary: string;

  toJSON() {
    return {
      _id: this._id,
      url: this.url,
      highlightedText: this.highlightedText,
      summary: this.summary,
    };
  }

  constructor(_id:Types.ObjectId, url: string, highlightedText: string, summary: string) {
    this._id = _id;
    this.url = url;
    this.highlightedText = highlightedText;
    this.summary = summary;
  }
}

export const HighlightSchema = SchemaFactory.createForClass(Highlight);
