import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Book } from './books/schemas/books.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/health-check')
  getHealthCheck(): Promise<Book[]> {
    return this.appService.getHealthCheck();
  }
}
