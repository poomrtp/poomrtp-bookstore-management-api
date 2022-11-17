import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  // @Prop()
  // title: string;

  // @Prop()
  // author: string[];

  // @Prop()
  // publishedDate: Date;

  // @Prop()
  // pages: number;

  // @Prop()
  // language: string;

  // @Prop()
  // publisher: string;

  // @Prop()
  // available: number;
  @Prop()
  id: number;
  @Prop()
  name: string;
  @Prop()
  nameEN: string;
  @Prop()
  author: string[];
  @Prop()
  illustrator: string[];
  @Prop()
  description: string;
  @Prop()
  publisher: string;
  @Prop()
  genres: string[];
  @Prop()
  category: string[];
  @Prop({ type: Date })
  publishedAt: Date;
  @Prop()
  price: number;
  @Prop()
  digitalPrice: number;
  @Prop()
  types: {
    name: string;
    nameTH: string;
    price: number;
  }[];
  @Prop()
  weight: number;
  @Prop()
  images: string[];
  @Prop()
  quantity: number;
  @Prop()
  status: string;
}

export const BookSchema = SchemaFactory.createForClass(Book);
