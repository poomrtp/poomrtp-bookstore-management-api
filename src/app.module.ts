import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    // ConfigModule.forRoot(),
    BooksModule,
    MongooseModule.forRoot(
      'mongodb+srv://poomrtp:CgUdNpmuaIbY5J8H@cluster0.tjtdjuc.mongodb.net/poomrtp-bookstore?retryWrites=true&w=majority',
    ),
    // AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
