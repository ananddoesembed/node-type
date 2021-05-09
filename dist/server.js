"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
const reListen = (req, res) => {
    console.log(req.rawHeaders, req.url, req.method);
    res.setHeader('Content-Type', 'Applications/json');
    res.end(JSON.stringify({ name: 'hi' }));
};
const server = http.createServer(reListen);
server.listen(3000);
//# sourceMappingURL=server.js.map