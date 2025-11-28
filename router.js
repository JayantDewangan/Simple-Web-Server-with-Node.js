// This router.js contains the routing logic and helper functions to serve files

const fs = require('fs');
const url = require('url');
const path = require('path');

// helper function to handle HTML files asynchronously : 
function serveHtml(res, fileName, statusCode=200){
    const filePath = path.join(__dirname,'views',fileName);

    fs.readFile(filePath, 'utf-8', (err, data)=>{
        if(err){
            console.log("Error reading HTML file: ",err);
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            return res.end('500-Internal Server Error');
        }
        res.writeHead(statusCode, { 'Content-Type' : 'text/html' });
        res.end(data);
    })
}

// helper function to handle CSS File
function serveCss(res, fileName){
    const filePath = path.join(__dirname, 'public','css',fileName);

    fs.readFile(filePath,'utf-8',(err,data)=>{
        if(err){
            console.log("Error reading CSS file:",err);
            res.writeHead(404,{ 'Content-Type': 'text/plain'});
            return res.end('404- CSS File Not Found');
        }
        res.writeHead(200,{ 'Content-type': 'text/css' });
        res.end(data);

    })
}

// Main request handler
function handleRequest(req,res){
    // for query strings
    const myUrl = url.parse(req.url, true);

    // routing for css
    if(myUrl.pathname === '/css/styles.css'){
        return serveCss(res, 'styles.css');
    }

    // routing for html pages
    switch(myUrl.pathname){
        case '/':
        case '/home':
            return serveHtml(res, 'home.html', 200);    
        case '/about':
            return serveHtml(res, 'about.html', 200);
        case '/contact':
            return serveHtml(res, 'contact.html', 200);
        case '/services':
            return serveHtml(res, 'services.html', 200);
        default:
            return serveHtml(res, '404.html', 404);
    }
}

module.exports = {
    handleRequest
};