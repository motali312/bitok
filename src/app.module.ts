import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BitModule } from './bit/bit.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/bit-ly', { useNewUrlParser: true }),
    BitModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
