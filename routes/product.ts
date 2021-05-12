import express  from 'express'


const route = express.Router();

route.get('/', (req, res) => {
console.log(req,res)
res.sendStatus(500)
});

export {route};