import http from 'http';

const requestlisten=function(req, res) {
    res.writeHead(200);
    switch(req.url){
        case "/name":
            console.log(req.method);
            res.writeHead(200);
        res.end('your name is niroj thapa');
          break;

          case "/others":
               res.writeHead(200);
        res.end('hey your are in my site do not go others');
             break;

             default:
                     res.writeHead(200);
    res.end('our backend is working well');
    
    }
    // console.log(req);
  // console.log(res);
}

const server=http.createServer(requestlisten);
server.listen(4040,()=>{
    console.log('server is running');
});