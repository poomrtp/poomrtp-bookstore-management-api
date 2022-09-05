import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop()
  title: string;

  @Prop()
  author: string[];

  @Prop()
  publishedDate: Date;

  @Prop()
  pages: number;

  @Prop()
  language: string;

  @Prop()
  publisher: string;

  @Prop()
  available: number;
}

export const BookSchema = SchemaFactory.createForClass(Book);
