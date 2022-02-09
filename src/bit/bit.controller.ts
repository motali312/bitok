import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BitService } from './bit.service';
import { CreateBitDTO, UpdateBitDTO } from './dto';
import { FindOneBitDto } from './dto/find-one.dto';

@ApiTags('Bit')
@Controller('bit')
export class BitController {
    constructor (private readonly service:BitService){}

   @Get()
   @ApiOkResponse({type:[CreateBitDTO]})
   async findAll(){
       return await this.service.findAll()
    }
    /*@Get('test')
     async test(@Res()res:Response){
     const url='http://' 
     //this.service.findUrl()
     //return res.redirect(url)
    } */
    @Post()
    @ApiCreatedResponse({type:CreateBitDTO})
    @ApiConflictResponse({description:'Url already exist'})
    async create(@Body()dto:CreateBitDTO){
     return await this.service.create(dto)
    }
    @Get(':id')
    @ApiNotFoundResponse()
    @ApiBadRequestResponse({description:'Validation issues'})
    async findOne(
    @Param() params:FindOneBitDto) {
      const {id}=params
     return await this.service.findOne(id)
    }
    @Put(':id')
    @ApiCreatedResponse({type:UpdateBitDTO})
    @ApiNotFoundResponse()
    async update(
    @Param() {id}:FindOneBitDto,
    @Body() dto:UpdateBitDTO) {
     return await this.service.update(id,dto)
    }

    @Delete(':id')
    @ApiNotFoundResponse({description:' already deleted'})
    async delete(@Param(){id}:FindOneBitDto){
     return await this.service.delete(id)
    }

}
    
