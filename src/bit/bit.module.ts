import { Module } from '@nestjs/common';
import { BitService } from './bit.service';
import { BitController } from './bit.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BitEntity, BitSchema } from './entity';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:BitEntity.name,schema:BitSchema},
    ])
  ],
  providers: [BitService],
  controllers: [BitController]
})
export class BitModule {}
