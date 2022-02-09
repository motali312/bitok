import { ApiProperty } from "@nestjs/swagger";
import {Length} from 'class-validator';

export class FindOneBitDto{
    @ApiProperty()
    @Length(24,24)
    id:string
}