const express = require('express');
const server = express();
const port = 8081;

server.all('/', (req, res) => {
    res.sendStatus(200);
});

function keepAlive() {
    server.listen(port);
};

module.exports = keepAlive;