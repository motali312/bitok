import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BitService } from './bit.service';
import { CreateBitDTO, UpdateBitDTO } from './dto';
import { FindOneBitDto } from './dto/find-one.dto';

@ApiTags('Bit')
@Controller('bit')
export class BitController {
    constructor (private readonly service:BitService){}

   @Get(':username')
   @ApiOkResponse({type:[CreateBitDTO]})
   async findAll(
    @Param('username') username:string) {
       return await this.service.findAll(username)
    }
    /* @Get('test')
     async test(@Res()res:Response){
    app.use('/rs', function (request, response) {
        response.redirect('title')
          })
     const url=this.entity.title
     this.service.findUrl()
     return res.redirect(url)
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

    @Delete(':id')
    @ApiNotFoundResponse({description:' already deleted'})
    async delete(@Param(){id}:FindOneBitDto){
     return await this.service.delete(id)
    }

}
    
