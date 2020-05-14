const http = require('http');
const { mul, add, sub, div } = require('./calculator');

const hostname = '127.0.0.1'
const port = 5410;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(add(2, 3) + " " + sub(8, 3) + " " + div(9, 3) + mul(3, 5) + " ")
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});