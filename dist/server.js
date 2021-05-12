"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const admin_1 = require("./routes/admin");
const product_1 = require("./routes/product");
const server = express_1.default();
server.use('/product', product_1.route);
server.use('/admin', admin_1.route);
server.use(express_1.default.json());
server.use((req, res) => {
    res.status(404).send('page not found');
    console.log(req.url, 'send 404');
});
server.listen(3000, () => console.log('listening'));
//# sourceMappingURL=server.js.map