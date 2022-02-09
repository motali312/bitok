import { Module } from '@nestjs/common';
import { BitService } from './bit.service';
import { BitController } from './bit.controller';

@Module({
  providers: [BitService],
  controllers: [BitController]
})
export class BlogModule {}
