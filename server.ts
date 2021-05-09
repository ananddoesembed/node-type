
import express from 'express'
const server = express()

server.use((req,res)=>{
    console.log(req)
    res.send('hi')
})
  
server.listen(3000,()=>
console.log('listening'))