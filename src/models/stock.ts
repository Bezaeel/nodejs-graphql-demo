import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Stock {
  @Field(() => Int)
  id: number;
  @Field()
  market: string;
  @Field()
  stockCode: string;
  @Field()
  openPrice: string;
  @Field()
  closePrice: string;
  @Field()
  price: string;
  @Field()
  weeksHigh: string;
}
