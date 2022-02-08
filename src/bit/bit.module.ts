import { Module } from '@nestjs/common';
import { BitService } from './bit.service';

@Module({
  providers: [BitService]
})
export class BlogModule {}
