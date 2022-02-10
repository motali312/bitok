
import {  ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBitDTO, UpdateBitDTO } from './dto';
import { BitEntity } from './entity';
import * as randomstring from 'randomstring'

@Injectable()
export class BitService {
  constructor(
    @InjectModel(BitEntity.name)
    private readonly entity: Model<BitEntity>,
  ) {}

  async findAll(username:string) {
    return await this.entity.find({username})
  }
  async create(dto:CreateBitDTO){
    const {title}=dto
    const {username}=dto
    const exist =await this.entity.findOne({title,username})
    console.log(exist)
    if (exist){
        throw new ConflictException()
    }

  
    const short=randomstring.generate({
      length: 8,
      charset: 'alphabetic'
    });
    
    dto.username=username
    dto.short=short
    return await this.entity.create(dto)
  }
  async findOne(id:string ){
    const bit=await this.entity.findById(id)
    if (!bit){
        throw new NotFoundException()
    }
    return bit
  }
 
  
  async delete(id:string){
    await this.findOne(id)
    await this.entity.findByIdAndDelete(id)
  }
}