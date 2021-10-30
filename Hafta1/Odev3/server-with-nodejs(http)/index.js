const http = require('http');

const server = http.createServer((req, res)=>{
    const url=req.url;

    if(url=== '/'){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write('<h3>Index Sayfasi</h3>');
    } else if(url==='/about'){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write('<h3>Hakkimda</h3>');
    } else if(url==='/contact'){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write('<h3>Iletisim</h3>');
    } else {
        res.writeHead(404, {"Content-Type": "text/html"});
        res.write('<h3 style="color:red">404, Sayfa bulunamadi</h3>');
    }

    res.end();

});

const port=5000;

server.listen(port, ()=>{
    console.log(`Sunucu port ${port}\'da baslatildi.`);
});