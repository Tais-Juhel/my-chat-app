const http = require('http');
const port = process.env.PORT || 3001;
const app = require("./app")

console.log("Creation du seveur")

const server = http.createServer(app);

server.listen(port)

console.log("Listen on port", port)