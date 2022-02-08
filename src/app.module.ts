import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './bit/bit.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/bit-ly', { useNewUrlParser: true }),
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
