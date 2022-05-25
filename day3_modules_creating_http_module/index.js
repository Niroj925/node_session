
//file system 
//this file will be created in server
//creat file and write into them

import * as fs  from "fs/promises";


await fs.writeFile(
    'hello.txt',
    "hello gaich this is a filesystem this is done async"
);

//read created files
//let us error handling
try{
let content=await fs.readFile('hellom.txt','utf-8');//it gives in buffer formate utf mean universal text formate
console.log(content);
}catch(e){
    console.log(e);
}
console.log('terminated');

//we can use unlink to delet file 
await fs.unlink('jpt.txt');
//to delet folder we
await fs.rmdir('test');

//for more infromation after hover then
//to add that dependencies yarn add @types/node
