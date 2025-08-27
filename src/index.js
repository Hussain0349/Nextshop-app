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




connect()

app.use('/api/v1',apiRoutes) 

app.listen(PORT,() => {
    console.log(`server is running on ${PORT}`)
})


