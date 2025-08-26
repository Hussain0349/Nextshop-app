import dotenv from 'dotenv'
dotenv.config({path:
  '../../.env'
})
import mongoose from "mongoose";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import User from '../model/user.model.js'
import connect from '../config/db_connection.js'
import apiError from "../utils/apiError.js";
const createAdmin = async () => {
    connect()
    try {
        const existedUser = await User.findOne({email: process.env.ADMIN_EMAIL})
        if(existedUser){
            console.log('user alread exist')
        }
        const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD,10)
        const user = await User.create({
                name: 'admin',
                email: process.env.ADMIN_EMAIL,
                password: hashedPassword,
                role: 'admin',
                address: 'kohat'
            })
  
        
    } catch (error) {
       console.log(error)
    }

}
createAdmin()

