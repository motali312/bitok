import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BitModule } from './bit/bit.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.0jjim.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    BitModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
