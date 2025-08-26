import dotenv from 'dotenv'
dotenv.config({path:
  '../.env'
})


import mongoose from "mongoose";
import express from 'express'
import cookieParser from 'cookie-parser'
import connect from './config/db_connection.js';
import apiRoutes from './route/routes.js';

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

const PORT = process.env.PORT || 3000
console.log("Cloud name:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("API Key:", process.env.CLOUDINARY_API_KEY);
console.log("API Secret:", process.env.CLOUDINARY_API_SECRET ? "Loaded" : "Missing");



connect()

app.use('/api/v1',apiRoutes) 

app.listen(PORT,() => {
    console.log(`server is running on ${PORT}`)
})


