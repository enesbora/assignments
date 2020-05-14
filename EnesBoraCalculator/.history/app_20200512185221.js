const http = require('http');
const calculator = require('./calculator');

const hostname = '127.0.0.1'
const port = 5753;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(process.argv[2] + " " + add(2, 3) + " " + sub(8, 3) + " " + div(9, 3) + mul(3, 5) + " ")
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});