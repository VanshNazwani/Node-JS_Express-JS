import http from 'http'

const server = http.createServer((req, res) => {
    console.log("server is visited");
    // res.end("get out from outside");
    switch (req.url) {
        case '/about':
            res.end("this is a about page")
            console.log(req.url);
            
            break;
    
        case '/contact':
            res.end('this is a  contact page')
            console.log(req.url);
            break;

        default :
            res.end("Home Page ")
            break;
    }
    
}) 

const port = 1000 
server.listen(1000 , () => {
    console.log("server is running ");
    
})