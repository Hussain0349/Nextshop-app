import express from 'express'
import register from '../controller/register.controller.js'

const router = express.Router()



// user routes
router.post('/register',register)

export default router