
import express from 'express'
import {route as adminRouter} from './routes/admin'
import {route as productRouter} from './routes/product'
const server = express()

server.use('/product',productRouter)
server.use('/admin',adminRouter)
server.use(express.json())

server.use((req,res)=>{
    res.status(404).send('page not found')
    console.log(req.url,'send 404')
})
server.listen(3000,()=>
console.log('listening'))