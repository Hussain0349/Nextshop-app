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
const router = express.Router()



// user routes
router.post('/register',register)
router.post('/login',login)
router.post('/userForget',auth,forgetPassword)
// admin related routes
router.post('/admin',adminLogin)
router.post('/adminLogout', adminLogout)

// products route
router.post('/addProduct',adminAuth,upload.single('image'),addProduct)


export default router