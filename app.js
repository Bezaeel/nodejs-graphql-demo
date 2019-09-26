const express = require('express');
const express_graphql = require('express-graphql');
const {buildSchema} = require('graphql');

//Schema def
const schema = buildSchema(`
    type Query {
        stock(stockCode: String!) : Stock
        stocks(market: String): [Stock]
    }
    type Stock{
        id: Int
        Market: String
        StockCode: String
        OpenPrice: String
        ClosePrice: String
        Price: String
        WeeksHigh: String
    }
`);

//Dummy Data
const stocksData = [
    {
        id: 1
        , Market: 'ASI'
        , StockCode: 'ACCESS'
        , OpenPrice: '52.05'
        , ClosePrice: '45.65'
        , Price: '37.00'
        , WeeksHigh: '32.04'
    }
    , {
        id: 2
        , Market: 'NSE30'
        , StockCode: 'NESTLE'
        , OpenPrice: '52.05'
        , ClosePrice: '45.65'
        , Price: '37.00'
        , WeeksHigh: '32.04'
    }
    , {
        id: 3
        , Market: 'ASI'
        , StockCode: 'DANGOTE'
        , OpenPrice: '52.05'
        , ClosePrice: '45.65'
        , Price: '37.00'
        , WeeksHigh: '32.04'
    }
    , {
        id: 4
        , Market: 'NSE30'
        , StockCode: 'MTN'
        , OpenPrice: '30.05'
        , ClosePrice: '45.65'
        , Price: '37.00'
        , WeeksHigh: '32.04'
    }
]

const getSingleStockInfo =  function(args){
    const id = args.stockCode;
    console.log(id);
    return stocksData.filter(stock => {
        return stock.StockCode.toLowerCase() == id.toLowerCase();
    })[0];
}

const getAllStocks = (args) => {
    if(args.Market){
        const market = args.Market;
        return stocksData.filter(stocks =>{
            return stocks.Market == market;
        });
    } else{
        return stocksData;
    }
}

const root ={
    stock: getSingleStockInfo,
    stocks: getAllStocks
};


const app = express();  
app.use('/graphql',express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true})
);
app.get('/', (req,res) =>{
    res.send("Ask Talabi...");
});

const port = 3000;
app.listen(port, ()=>{
    console.log("server started on port 3000");
});