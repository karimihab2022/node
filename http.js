const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end('home')
    }
    else{
        res.end("other")

    }
})

server.listen(3000)