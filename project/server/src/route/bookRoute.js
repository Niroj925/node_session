import express from 'express';
import bookControl from'../controller/bookController.js';

import multer from 'multer';

//multer is used to store images in db
let imageName;
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/image/')
    },
    //to rename filename of images
    filename: function (req, file, cb) {
      imageName = Date.now() + '-' + Math.round(Math.random() * 1E9)+'-'+
      file.originalname.trim();//trim is ues to remove -,/ etc symbol
      cb(null, imageName);
    }
  })
  
const upload = multer({ storage })

const router = express.Router();

//set middleware to store images in db
//sometimes permission require to upload images we have to do chmod 777 path of imagesfile

//create object of bookcontroller
const bookcontroller=new bookControl();

router.post('/add',upload.single('image'),(req,res)=>{
    bookcontroller.addBook(req,res,imageName);
    
})

//get data

router.get('/:id',bookcontroller.getData);

//update
router.put('/update/:id',bookcontroller.updateBook);
//delete
router.delete('/delete/:id',bookcontroller.deleteBook);
//search
router.get('/search/all',bookcontroller.search);

//find all books
router.get('/',bookcontroller.getBook);

export default router;

