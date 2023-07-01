const express = require('express');
const app = express();
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  const reqUrl = url.parse(req.url, true);
  
  if (reqUrl.pathname === '/gasto-viagem' && req.method === 'GET') {
    const { distancia, preco, consumo } = reqUrl.query;

    const distance = parseFloat(distancia);
    const fuelPrice = parseFloat(preco);
    const fuelConsumption = parseFloat(consumo);

    const totalCost = (distance / fuelConsumption) * fuelPrice;

    const response = {
      custoTotal: totalCost.toFixed(2)
    };

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
  } else {
    res.statusCode = 404;
    res.end('Endpoint não encontrado');
  }
});

const port = 8080;
server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
