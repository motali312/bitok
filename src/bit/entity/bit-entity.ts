import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IBit } from "../interfaces";

@Schema()
export class BitEntity implements IBit {
  @Prop({
    type: String,
    required: true,
  })
  title: string;
  @Prop({
    type:String,
    required:true,
  })
  short:string;
  @Prop({
    type:String,
    required:true,
  })
  username:string

}

export const BitSchema = SchemaFactory.createForClass(BitEntity);