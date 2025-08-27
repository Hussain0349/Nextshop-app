// import asyncHandler from '../utils/asyncHandler.js'
// import User from '../model/user.model.js'
// import apiError from '../utils/apiError.js'
// import apiResponse from '../utils/apiResponse.js'
// import sendEmail from '../utils/email.js'

// const forgetPassword = asyncHandler(async (req,res) => {

//     const {email} = req.body

//     if(!email){
//         throw new apiError('Email required! ')
//     }
//     const user = await User.findOne({email})

//     if(!user){
//         throw new apiError('User not found! ')
//     }
//     const otp = Math.floor(100000 + Math.random() * 900000).toString();
//     const otpExpires = Date.now() + 1 * 60 * 1000
//     console.log(otp,otpExpires)
//     user.otp = otp
//     user.otpExpires=  otpExpires
//     await user.save()
//     const message = `Please verify the otp ${otp} within 1 minute other it will be expired`
//    const sendMail =  await sendEmail(email,'password reset OTP',message)
   
//    if(!sendMail){
//     throw new apiError(400,'Email not sended')
//    }

//     const response = new apiResponse(200,user,'send email please verify it! ')
//     res.status(response.statusCode).json({
//         response
//     })

// })
// export default forgetPassword

import asyncHandler from '../utils/asyncHandler.js'
import User from '../model/user.model.js'
import apiError from '../utils/apiError.js'
import apiResponse from '../utils/apiResponse.js'
import sendEmail from '../utils/email.js'

const forgetPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  if (!email) {
    throw new apiError(400, 'Email required!');
  }

  const user = await User.findOne({ email });
  if (!user) {
    throw new apiError(404, 'User not found!');
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpires = new Date(Date.now() + 1 * 60 * 1000); // 1 min expiry
 
  user.otp = otp;
  user.otpExpires = otpExpires;

  await user.save();

  const message = `Please verify the OTP ${otp} within 1 minute or it will expire.`;

  await sendEmail(email, 'Password Reset OTP', message);

  const response = new apiResponse(200, null, 'OTP sent to your email. Please verify it!');
  res.status(response.statusCode).json(response);
});

export default forgetPassword;
