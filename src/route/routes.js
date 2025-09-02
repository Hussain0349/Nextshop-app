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
import getAllProducts from '../controller/product controoller/getAllProducts.js'
import getProduct from '../controller/product controoller/getProduct.js'
import addToCart from '../controller/cart controller/addToCart.js'
import cardItems from '../controller/cart controller/caritems.js'
import registerSupplier from '../controller/supplier controller/registerSupplier.controller.js'
import loginSupplier from '../controller/supplier controller/login.controller.js'
// import removeToCart from '../controller/cart controller/removeToCart.js'
const router = express.Router()

// public routes
router.get('/products',getAllProducts)
router.get('/products/:name',getProduct)

// user routes
router.post('/register',register)
router.post('/login',login)
router.post('/forgotPassword',forgetPassword)
router.post('/resetPassword',resetPassword)

// cart routes
router.post('/cart',auth,addToCart)
router.get('/cart',auth,cardItems)
// router.delete('/cart/:itemId',auth,removeToCart)

// admin related routes
router.post('/admin',adminLogin)
router.post('/adminLogout', adminLogout)

// supplier routes
router.post('/registerSupplier',adminAuth,registerSupplier)
router.post('supplierLogin',supplierAuth,loginSupplier)

// products route
router.post('/addProduct',adminAuth,upload.single('image'),addProduct)
router.delete('/deleteProduct/:id',adminAuth,deleteProduct)
router.put('/updateProduct/:id',adminAuth,updateProduct)


export default router