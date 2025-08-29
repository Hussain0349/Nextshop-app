import express from 'express'
import register from '../controller/register.controller.js'
import login from '../controller/login.controller.js'
import auth from '../middleware/auth.middleware.js'
import adminAuth from '../middleware/adminAuth.middleware.js'
import adminLogin from '../controller/admin controller/adminLogin.controller.js'
import addProduct from '../controller/product controoller/addProduct.js'
import adminLogout from '../controller/admin controller/adminLogout.js'
import upload from '../middleware/multer.middleware.js'
import forgetPassword from '../controller/forgetPassword.js'
import resetPassword from '../controller/resetPassword.js'
import deleteProduct from '../controller/product controoller/deleteProduct.js'
import updateProduct from '../controller/product controoller/updateProduct.js'
const router = express.Router()



// user routes
router.post('/register',register)
router.post('/login',login)
router.post('/forgotPassword',forgetPassword)
router.post('/resetPassword',resetPassword)

// admin related routes
router.post('/admin',adminLogin)
router.post('/adminLogout', adminLogout)


// products route
router.post('/addProduct',adminAuth,upload.single('image'),addProduct)
router.delete('/deleteProduct/:id',adminAuth,deleteProduct)
router.put('/updateProduct/:id',adminAuth,updateProduct)


export default router