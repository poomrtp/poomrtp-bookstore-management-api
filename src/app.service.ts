import { Injectable } from '@nestjs/common';
import { ProductService } from './product/product.service';
import { Product } from './product/schemas/product.schema';

@Injectable()
export class AppService {
  constructor(private bookService: ProductService) {}
  getHello(): string {
    return 'Hello World!';
  }
  getHealthCheck(): Promise<Product[]> {
    return this.bookService.findAll();
  }
}
