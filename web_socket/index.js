//web socket is a real time responsive system at any instant
//it is  bidirectional between client and server 
//we socket.io library and
import express from 'express';
import http from 'http';
import{fileURLToPath} from "url";
import{dirname}from "path";
import {Server} from "socket.io";

const app=express();//app is a instant which is used to 
//here we make server from http and express 
const server =http.createServer(app);
//here server's function is done through http by taking express app instant
//es6 module directly does not support to send file to client so we have to like this 
const __filename=fileURLToPath(import.meta.url);
const __dirname=dirname(__filename);
//this make web socket
//websocket has two version cilent n server side
const io=new Server(server);//to make bidirectional connections this is also make in client too


app.get('/',(req, res)=>{
    res.sendFile(__dirname+ "/index.html");
})
//to get real time information while connection and disconnection what have done
//
io.on('connection', (socket) => {
    console.log('a user connected:'+socket.id);

    socket.on('disconnect', () => {
      console.log('user disconnected:'+socket.id);
    });
    //it receive the input value from client event
    //chat message is a input event name in client
socket.on('chat message',(data)=> {
 // console.log("message: " + data);
//to broadcast input message to all client from server 
  io.emit('chat message', data);
  });
  
  });

  
  server.listen(8080, () => {
    console.log('server is running');
  });