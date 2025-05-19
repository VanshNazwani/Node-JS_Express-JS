const http = require("http");

const myServer = http.createServer((req, res) => {
    console.log("our server is established at port ");
    console.log(`last time server visited at ${new Date} `);
    
    res.end("thank you visit again")
});

const port = 1000
myServer.listen(port, () => console.log("server started")); 



