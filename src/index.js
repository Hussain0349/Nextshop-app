import dotenv from 'dotenv'
dotenv.config({path:
  '../.env'
})
import mongoose from "mongoose";
import express from 'express'
// import CookieParser from 'cookie';
import connect from './config/db_connection.js';
import router from './route/routes.js';

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const PORT = process.env.PORT || 3000




connect()

app.use('/api/v1',router) 
app.listen(PORT,() => {
    console.log(`server is running on ${PORT}`)
})


