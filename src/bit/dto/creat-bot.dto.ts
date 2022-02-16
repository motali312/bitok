import { ApiProperty } from "@nestjs/swagger"

export class CreateBitDTO {
  @ApiProperty({description:'Original url',example:'https://www.google.com'})
  title: string;
  @ApiProperty({description:'Name of user',example:'admin'})
  username:string;
  @ApiProperty({description:'Short url',example:'Sfvgdz'})
  short:string;
  @ApiProperty({description:'visitors counter'})
  visitcounter:number;
}