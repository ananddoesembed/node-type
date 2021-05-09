import { Http2ServerRequest, Http2ServerResponse } from "http2"

const http = require('http')

const reListen = (req:Http2ServerRequest,res:Http2ServerResponse)=>{
console.log(req.rawHeaders,req.url,req.method)
res.setHeader('Content-Type','Applications/json')
res.end(JSON.stringify({name:'hi'}));
}
const server = http.createServer(reListen)

server.listen(3000)