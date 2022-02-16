import { Body, Controller, Delete, Get, Param, Post, Put, Res, } from '@nestjs/common';
import { ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BitService } from './bit.service';
import { CreateBitDTO, UpdateBitDTO } from './dto';
import { FindOneBitDto } from './dto/find-one.dto';
import { Response } from 'express';
import { count } from 'console';

@ApiTags('Bit')
@Controller('bit')
export class BitController {
    constructor (private readonly service:BitService){}

    @Get('/user/:username')
    @ApiOkResponse({type:[CreateBitDTO]})
    async findAll(
    @Param('username') username:string) {
      return await this.service.findAll(username)
    } 

    @Get('/find/:id')
    @ApiNotFoundResponse()
    @ApiBadRequestResponse({description:'Validation issues'})
    async findOne(
    @Param() params:FindOneBitDto) {
      const {id}=params
     return await this.service.findOne(id)
    }
 
    @Post()
    @ApiCreatedResponse({type:CreateBitDTO})
    @ApiConflictResponse({description:'Url already exist'})
    async create(@Body() dto:CreateBitDTO){
     return await this.service.create(dto)
    }
    

    @Put(':id')
    @ApiCreatedResponse({type:UpdateBitDTO})
    @ApiNotFoundResponse()
    async update(
    @Param(){id}:FindOneBitDto,
    @Body() dto:UpdateBitDTO,) {
    return await this.service.update(id,dto)
    }

    @Delete(':id')
    @ApiNotFoundResponse({description:' already deleted'})
    async delete(@Param() {id}:FindOneBitDto){
     return await this.service.delete(id)
    }

    @Get(':short')
    @ApiNotFoundResponse()
    @ApiBadRequestResponse({description:'Validation issues'})
    async test(@Res()res:Response,
     @Param('short') short:string){
      const shortlink=await this.service.findByShort(short)
      const title=shortlink.title
      return res.redirect(`${title}`)
      
    } 
    /* @Get(':short')
    @ApiOkResponse({type:[CreateBitDTO]})
    async findByShort( @Param('short') short:string){
      await this.service.findByShort(short)
      console.log(short)
      return short
    } */

}
    
