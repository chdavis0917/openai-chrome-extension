import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HighlightDocument = Highlight & Document;

@Schema()
export class Highlight {
  @Prop()
  id: number;

  @Prop()
  url: string;

  @Prop()
  highlightedText: string;

  toJSON() {
    return {
      id: this.id,
      url: this.url,
      highlightedText: this.highlightedText,
    };
  }

  constructor(id: number, url: string, text: string) {
    this.id = id;
    this.url = url;
    this.highlightedText = text;
  }
}

export const HighlightSchema = SchemaFactory.createForClass(Highlight);
