import express from 'express'
const route = express.Router()
import {addProducts} from '../controllers/products' 
route.get('/add-product',addProducts)

route.post('/add-product', (req, res) => {
    console.log(req.url)
    res.redirect('/');
});

export {route}