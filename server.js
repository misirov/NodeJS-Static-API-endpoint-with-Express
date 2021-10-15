const express = require('express');
const app = express();

var PORT = 8080;

// enable cors headers for fetching localhost APIs during development 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


app.get('/', (req, res) => {
    res.json([

        {
            name:'Bitcoin',
            usd: 61470,
            marketcap: 1158385447886.8098,
            vol: 52701562062.253815,
            change: 6.620160040742175,
            last: 1634337003
          },
    
        {
            name:'xrp',
            usd: 61470,
            marketcap: 1158385447886.8098,
            vol: 52701562062.253815,
            change: 6.620160040742175,
            last: 1634337003
          },
    
        {
            name:'ether',
            usd: 61470,
            marketcap: 1158385447886.8098,
            vol: 52701562062.253815,
            change: 6.620160040742175,
            last: 1634337003
          }
    
    
    ]);
})



console.log(PORT, '127.0.0.1');
app.listen(PORT);
