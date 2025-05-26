import exp from "express";
import Path from 'path';
const app = exp();

app.use(exp.static(Path.join(Path.resolve(),'public')))
app.get('/', (req, res) => {
    const product = {
        title : "samsung",
        price : "100000",
    };
    res.render('index.ejs',{product})   
});

app.listen(2000, () => console.log('Server running on port 1000'));
