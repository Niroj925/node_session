import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const app= express();

app.use(express.static("public"));
app.set("view engine","ejs");//template engine is ejs

const __filename=fileURLToPath(import.meta.url)
const __dirname=dirname(__filename);

app.get('/', (req, res) => {
    //res.sendFile(__dirname+'/view/homepage.html');
    //render properties is used to convert our ejs file into html file 
res.render('homepage');//ejs file must be in views folder

})
app.get('/aboutus/', (req, res) => {
   res.render('about',{title: 'About'});
})
app.get('/services', (req, res) => {
  res.render('service');
})

app.listen(8000,(req,res) => {
    console.log('server is running');

})