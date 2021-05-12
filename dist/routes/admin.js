"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.route = void 0;
const express_1 = __importDefault(require("express"));
const route = express_1.default.Router();
exports.route = route;
const products_1 = require("../controllers/products");
route.get('/add-product', products_1.addProducts);
route.post('/add-product', (req, res) => {
    console.log(req.url);
    res.redirect('/');
});
//# sourceMappingURL=admin.js.map