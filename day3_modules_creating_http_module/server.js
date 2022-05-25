import http from 'http';
/*
const server=http.createServer((res,req)=>{
res.writeHead(200);
res.end('backend is working');

});

server.listen(2000,function(){
    console.log('server is running');
})
*/
const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, Backend is working');
}

const server = http.createServer(requestListener);
server.listen(8080,()=>{
    console.log('server is running');
});