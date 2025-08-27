import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
dotenv.config({path: '../../.env'})
const sendEmail  = (to,subject,message) => {

    try {
        
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
    
            }
        })
        console.log(to,message,subject)
        const sendMail = transporter.sendMail({
            from: process.env.EMAIL_USER,
            to,
            subject,
             text: message,
        })
        
        console.log('Email sended sucessfully! ')
         return sendMail
    
    } catch (error) {

        console.log('error caugfht while sending an email',error)
        
    }



}
export default sendEmail