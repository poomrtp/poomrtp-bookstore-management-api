import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Product } from './product/schemas/product.schema';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/health-check')
  getHealthCheck(): Promise<Product[]> {
    return this.appService.getHealthCheck();
  }
}
