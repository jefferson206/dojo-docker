const cors = require('cors');
const port = process.env.API_PORT || 3003;

const bodyParser = require('body-parser');
const express = require('express');

const server = express();
const allowCors = require('./cors');

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
// server.use(allowCors);
// server.use(cors());
server.use((request, response, next) => {
            response.header("Access-Control-Allow-Origin", "*");
            response.header("Access-Control-Allow-Credentials", "true");
            response.header("Access-Control-Allow-Methods", 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            response.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
            server.use(cors());
            if (request.method === 'OPTIONS') {
               response.status(200);
            }
            next();
        });

server.listen(port, () => {
  console.log(`BACKEND is running on port ${port}`);
});

module.exports = server;