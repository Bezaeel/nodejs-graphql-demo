import { Args, Query, Resolver } from '@nestjs/graphql';
import { GetStockArgs } from 'src/dtos/args/get-stock.args';
import { Stock } from 'src/models/stock';
import { StockService } from 'src/services/stocks.service';

@Resolver(() => Stock)
export class StocksResolver {
  constructor(private readonly stockService: StockService) {}

  @Query(() => Stock, { name: 'getSingleStockInfo', nullable: true })
  getStock(@Args() getStockArgs: GetStockArgs): Stock {
    return this.stockService.getStock(getStockArgs);
  }

  @Query(() => [Stock], { name: 'getAllStocks', nullable: 'items' })
  getStocks(): Stock[] {
    return this.stockService.getStocks();
  }
}
