import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './schemas/books.schema';

@Controller('products')
export class BooksController {
  constructor(private booksService: BooksService) {}
  @Get()
  getBooks(): Promise<Book[]> {
    return this.booksService.findAll();
  }
  @Get('/test')
  getTest(): string {
    return 'Success!!';
  }
}
