import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './schemas/product.schema';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}
  @Get()
  getBooks(): Promise<Product[]> {
    return this.productService.findAll();
  }
  @Get('/test')
  getTest(): string {
    return 'Success!!';
  }
}
