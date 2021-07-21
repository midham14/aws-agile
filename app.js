const express = require('express')
const app = express()

const port = 3000

app.get('/', (req,res)=>{
    res.send({message:'halo server', data:[{id:1,title:'Avengers'}, {id:2,title:'Batman'}]})
})



app.listen(port, ()=>{
    console.log('express listening on port '+port)
})