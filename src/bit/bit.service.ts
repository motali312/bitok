
import {  Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BitEntity } from './entity';

@Injectable()
export class BitService {
  constructor(
    @InjectModel(BitEntity.name)
    private readonly entity: Model<BitEntity>,
  ) {}

  async findAll() {
    return await this.entity.find(
      // { date: { $gt: new Date }},
      null,
    )
  }
}