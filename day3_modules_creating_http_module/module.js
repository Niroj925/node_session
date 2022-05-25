/*
//this is a common js modular system
const {add,sub}=require('./app');
console.log(add(4,6));
console.log(sub(4,6));

//latest ecmascript module es6 system
*/
import {add, sub} from './app.js';

console.log(add(4,6));
console.log(sub(4,6));
//in case of es module for file path
console.log(import.meta.url);