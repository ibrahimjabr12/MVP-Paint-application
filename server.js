const express = require('express') 
const db = require('./DataBase/mysql.js')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port =3022
// app.use(bodyParser.json())
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors())
app.use(express.static('/'))
app.post('/save',(req,res)=>{
    db.addImage(req.body.data.image)
    .then(()=>console.log('it did work'))
    .then(()=>res.send())
    .catch((error)=>res.send(error))
    
})
app.get('/images',(req,res)=>{
    db.retrevallImages((error,respons)=>{
        if(error){
            res.send(error)
        }else{
            res.send(respons)
        }
    })
  
    
})
app.listen(port,console.log('the server is runing on port '+port))