
import express from 'express';
import UserController from '../controller/userController.js';

const router= express.Router();
//creat object of class usercontroller and 

const userController=new UserController();
//creat and insert in database
router.post("/add",userController.addUser);

//fetch the data from the database
router.get('/:id',userController.getUser);

//update databases
router.put('/update/:id',userController.updateUser);

//delete items from database
router.delete('/delete/:id',userController.deleteUser);

//operator use to find something with hint value
router.get('/search/by',userController.searchUser);

export default router;