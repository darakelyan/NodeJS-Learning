const http = require('http')

const server = http.createServer((req,res) => {
    if (req.url === "/")
    {
        res.end("Homepage")
    }
    else if (req.url === '/about')
    {
        res.end("About")
    }
    else{
        res.end(`
        <h1> Ooooooooooops </h1>
        <p> Jamiroquai<p>
        <a href= "/">Return</a>
        `)
    }
})

server.listen(5000)