import {Router} from "express";
import AuthController from "../controller/control.js";
import validateToken from "../middleware/validateToken.js";

const router=Router();
const authController=new AuthController();

router.post ('/',authController.authenticate);

router.post ('/addauth',authController.addUser);

router.get('/listuser', authController.listUser);

export default router;