import { Controller, Get } from '@nestjs/common';
import { BitService } from './bit/bit.service';
import { ApiBadRequestResponse, ApiConflictResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateBitDTO } from './bit/dto';

@Controller()
export class AppController {
  constructor(private readonly service: BitService) {}


}
