// This server.js is the main entry point of the Node.js server

const http = require('http');
const { handleRequest } = require('./router') // importing routing logic
const PORT = 8000;

// creating a http server
const myServer = http.createServer((req,res)=>{
    if(req.url === '/favicon.ico') return res.end();
    const date = new Date(Date.now());
    console.log(`[${date.toLocaleString()}] ${req.method}, ${req.url}`);
    handleRequest(req,res);
})

// listening on port number 8000
myServer.listen(PORT, ()=>{
    console.log(`Server is up and running at http://localhost:${PORT}`)
})