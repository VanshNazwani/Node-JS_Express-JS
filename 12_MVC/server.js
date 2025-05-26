import express from 'express'
import mongoose from 'mongoose'
import { user } from './Models/users.js'

const app = express()
app.use(express.urlencoded({extended:true}))

mongoose.connect(
    "mongodb+srv://nazwaniv:NszQd8BJgjdx6ayj@cluster0.nsa0jlw.mongodb.net/",{
    "dbName" : "NodeJS_Express_series"
    }
).then(()=>console.log("MongoDB connected "))
.catch((error) => console.log(error));

app.get('/',(req,res)=>{
    res.render('index.ejs')
})

app.post('/',async (req,res)=>{
    const {name,email} = req.body
    try {
        let newUser = await user.create({ name, email });
        res.send('<h1> your Form has been submitted </h1> ');
        console.log("Data resitered succesfully");
        
    } catch (error) {
        res.send("<h1>error occur</h1>")
    }
    
})
const port = 3000;
app.listen(port,() => console.log(`Server is running on port: ${port}`))
