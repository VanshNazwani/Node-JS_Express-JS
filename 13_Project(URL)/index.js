import express from 'express'
import mongoose from 'mongoose'
import Path from 'path'
import { urlshort } from './Controllers/url.js'
     
const app = express()
const port = 3000;
app.use(express.urlencoded({extended:true}))
app.use(express.static(Path.join(Path.resolve(),'public')))
  
mongoose.connect(
    "mongodb+srv://nazwaniv:NszQd8BJgjdx6ayj@cluster0.nsa0jlw.mongodb.net/",{
    "dbName" : "NodeJS_Express_series"
    }
).then(()=>console.log("MongoDB connected "))
.catch((error) => console.log(error));

app.set('view engine', 'ejs');  // ✅ if you're using EJS

app.get('/',(req,res)=>{
    res.render("index.ejs",{shorturl:null})
})

// // Handle URL submission
app.post('/shorten',urlshort)


app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})