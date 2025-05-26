import express from 'express'
import mongoose from 'mongoose'
const app = express()
mongoose.connect(
    "mongodb+srv://nazwaniv:NszQd8BJgjdx6ayj@cluster0.nsa0jlw.mongodb.net/",{
    "dbName" : "NodeJS"
    }
).then(()=>console.log("MongoDB connected ")).catch((error) => console.log(error))

app.get('/',(req,res) => {
    res.render("index.ejs")
})

const port = 2000;
app.listen(port,() => console.log(`Server is running on port: ${port}`))
