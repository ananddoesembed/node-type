import express from 'express'
const addProducts = (req:express.Request,res:express.Response)=>{
    console.log(req.url)
    res.send('add-product')
}

export {addProducts}