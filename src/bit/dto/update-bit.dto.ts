import { ApiProperty } from "@nestjs/swagger"

export class UpdateBitDTO {
  @ApiProperty({description:'Original url',example:'https://www.google.com'})
  title: string;
  @ApiProperty({description:'Name of user',example:'admin'})
  username:string;
  @ApiProperty({description:'Short url',example:''})
  short:string;
  
  //count:0
}
//POST localhost:3000/url/username
// GET localhost:300/url/rs
//redirect v controllere
