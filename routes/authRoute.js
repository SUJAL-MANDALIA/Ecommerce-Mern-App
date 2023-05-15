import express from "express";
import { forgotPasswordController, getAllOrdersController, getOrdersController, loginController, orderStatusController, registerController, testController, updateProfileController } from "../controllers/authController.js";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";

//Router Object
const router = express.Router();

//routing
//REGISTER
router.post("/register",registerController)

//LOGIN
router.post("/login",loginController);

//Forgot Password
router.post("/forgot-password",forgotPasswordController)

//TEST
router.get("/test",requireSignin,isAdmin,testController);

//protected User auth-route
router.get("/user-auth",requireSignin , (req,res)=>{
    res.status(200).send({ok:true});
})
//protected Admin auth-route
router.get("/admin-auth",requireSignin ,isAdmin, (req,res)=>{
    res.status(200).send({ok:true});
})

//update profile
router.put("/profile",requireSignin,updateProfileController)

//orders
router.get("/orders",requireSignin,getOrdersController)

//all orders
router.get("/all-orders",requireSignin,isAdmin,getAllOrdersController)

//order status update
router.put("/order-status/:orderId",requireSignin,isAdmin,orderStatusController)
export default router