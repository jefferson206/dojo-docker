const port = process.env.API_PORT || 3003;

const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

const server = express();
const allowCors = require('./corsTeste');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
// server.use(allowCors);
server.use(cors());

server.listen(port, () => {
  console.log(`BACKEND is running on port ${port}`);
});

module.exports = server;
