const fs=require("fs");
const http=require("http");
const server=http.createServer();
server.on("request",(req,res)=>{
    fs.readFile("./stream/input.txt",'utf-8',(err,data)=>{
     console.log(err);
   res.end(data);
   console.log("everything is fine");
   });
// stream 
const rstream=fs.createReadStream("./stream/input.txt");
// rstream.on('data',(chunkdata)=>{
// res.end(chunkdata);
// })
// rstream.on("end",()=>{ 
//     /*
//     The client will receive chunks of data but will not know when the response is complete.

//     The client's request may appear as if it's still pending, leading to a delay or timeout on the client side.

//     The connection may not be closed properly, potentially causing resource leaks on the server.

//     */
//     res.end();
// });
// rstream.on('error',(err)=>{
//     console.log(err);
//     res.end("file not found ");
// })


//  pipe method 2nd method
rstream.pipe(res);
});
server.listen(8000,"127.0.0.1");