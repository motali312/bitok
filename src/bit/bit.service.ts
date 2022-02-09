
import {  ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBitDTO, UpdateBitDTO } from './dto';
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
     // null,
    )
  }
  async create(dto:CreateBitDTO){
    const {title}=dto
    const exist =await this.entity.findOne({title})
    console.log(exist)
    if (exist){
        throw new ConflictException()
    }
    return await this.entity.create(dto)
  }
  async findOne(id:string ){
    const bit=await this.entity.findById(id)
    if (!bit){
        throw new NotFoundException()
    }
    return bit
  }
  async update(id:string,dto:UpdateBitDTO){
    const bit = await this.findOne(id)
    Object.assign(bit,dto)
    return await bit.save()
  }
  async delete(id:string){
    await this.findOne(id)
    await this.entity.findByIdAndDelete(id)
  }
}