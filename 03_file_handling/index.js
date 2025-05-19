const fs = require("fs");

// synchronous (blocking)
fs.writeFileSync('./test.txt', 'Hey Vansh Nazwani SYNC')

 // Sync....
const read = fs.readFileSync('./test.txt',"utf-8");
console.log(read);;



// // Asynchronous (non-blocking)
// fs.writeFile('./test.txt', 'Hey Vansh Nazwani ASYNC', (err) => {})


// // Async....
// fs.readFile("./test.txt","utf-8", (err, result) => {
//     if(err){
//         console.log("Error",err);;
        
//     }
//     else{
//         console.log(result);
        
//     }
// })

fs.appendFileSync('./test.txt',"\nhey there ");


// to create folder and files 
// fs.mkdirSync("my-docs/a/b",{recursive : true})
