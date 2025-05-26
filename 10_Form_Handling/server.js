import exp from "express";
import Path from 'path';
const app = exp();

app.use(exp.urlencoded({extended:true}))

app.use(exp.static(Path.join(Path.resolve(),'public')))
app.get('/', (req, res) => {
    res.render('index.ejs')   
});

app.post('/database' ,(req,res) => {
    console.log("Server working");
    console.log(req.body);
    res.json({topic:"Form Handling Done Successfully"})
    
})
app.listen(2000, () => console.log('Server running on port 2000'));
