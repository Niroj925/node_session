import {Router} from "express";
import BlogController from '../controller/blogControl.js';

const router=Router();

//make a instant this is like a object of the class
const blogController=new BlogController();

router.post('/add',blogController.addBlog);

router.get('/:id',blogController.getBlog);

router.put('/update/:id',blogController.updateBlog);

router.delete('/delete/:id',blogController.deleteBlog);

export default router;