// ************* CRUD : CREATE READ UPDATE DELETE *************
// CREATE : POST (METHOD)
// READ : GET (METHOD)
// UPDATE : PUT (METHOD)
// DELETE : DELETE (METHOD)

import express from 'express'
const app = express()
import path from 'path'


// app.get('/products',(req,res) => {
//     res.json({
//         products : [
//             {title: "iphone",price: 190000},
//             {title: "samsung",price: 100000},
//         ]
//     })
//     console.log("this is a home route ");
//     res.send("it is your resposnse")    
// })

const products = [
    {title: "iphone",price: 190000},
    {title: "samsung",price: 100000},
    {title: "oneplus",price: 70000},
]

app.get('/', (req, res) => {
    // console.log("this is a product page");
    // res.end("get back to file");
    // res.send("<h1> This is your response </h1>");

    // re
    // s.json({product:products[2]})

    const dir = path.resolve()
    const url = path.join(dir,'./index.html')  
    res.sendFile(url)
    
});

const port = 3000;

app.listen(port, () => console.log("server is running ")
)