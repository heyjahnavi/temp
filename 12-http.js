const http=require('http')
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('welcome to our home page')
    }
    else if(req.url==='/about'){
        res.end('here is the History')
    }
    else{
        res.end('<h1>OOPs!<h1><p> we cant seem to find the page</p><a href="/">back home</a>')
     }
})
server.listen(8000)