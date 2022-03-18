import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetStockArgs {
  @Field()
  @IsNotEmpty()
  id: number;
}
