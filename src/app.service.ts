import { Injectable } from '@nestjs/common';
import { BooksService } from './books/books.service';
import { Book } from './books/schemas/books.schema';

@Injectable()
export class AppService {
  constructor(private bookService: BooksService) {}
  getHello(): string {
    return 'Hello World!';
  }
  getHealthCheck(): Promise<Book[]> {
    return this.bookService.findAll();
  }
}
