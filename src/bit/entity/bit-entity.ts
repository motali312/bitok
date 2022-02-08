import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IBit } from "../interfaces";

@Schema()
export class BitEntity implements IBit {
  @Prop({
    type: String,
    required: true,
  })
  title: string;

}

export const BitSchema = SchemaFactory.createForClass(BitEntity);