import { Injectable } from '@nestjs/common';
import { GetStockArgs } from 'src/dtos/args/get-stock.args';
import { Stock } from 'src/models/stock';

@Injectable()
export class StockService {
  //Dummy Data
  private stocksData: Stock[] = [
    {
      id: 1,
      market: 'ASI',
      stockCode: 'ACCESS',
      openPrice: '52.05',
      closePrice: '45.65',
      price: '37.00',
      weeksHigh: '32.04',
    },
    {
      id: 2,
      market: 'NSE30',
      stockCode: 'NESTLE',
      openPrice: '52.05',
      closePrice: '45.65',
      price: '37.00',
      weeksHigh: '32.04',
    },
    {
      id: 3,
      market: 'ASI',
      stockCode: 'DANGOTE',
      openPrice: '52.05',
      closePrice: '45.65',
      price: '37.00',
      weeksHigh: '32.04',
    },
    {
      id: 4,
      market: 'NSE30',
      stockCode: 'MTN',
      openPrice: '30.05',
      closePrice: '45.65',
      price: '37.00',
      weeksHigh: '32.04',
    },
  ];

  getStock(getStockArgs: GetStockArgs): Stock {
    return this.stocksData.find((stock) => stock.id === getStockArgs.id);
  }

  getStocks(): Stock[] {
    return this.stocksData;
  }
}
