
const http = require('http')
const fs = require("fs")
// // const myServer = http.createServer((req,res) => {

// //      console.log("REQ : ",req)
// //     //  console.log("RES : ",res)
// //     res.end('Hello From Server!!')
// // });

 const myServer = http.createServer((req,res) => {
    const log = `${Date.now()} : ${req.url} New Req. Received! \n`
    fs.appendFile("log.txt",log,(data,error) =>{
        // console.log(data)
        // res.end('Hello From Server!!')
        switch(req.url){
          case "/":
            res.end("HomePage!")
            break;
            case "/tushar":
              res.end("Tushar")
               break;
            default:
              res.end("404 Not Found!")
        }
    });
  });
myServer.listen(3000,()=>{
    console.log("SERVER STARTED!....")
})


