import mongoose from "mongoose";



const connect = async (req,res) => {

    try {
       const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`)
        console.log('Database is connected! ')
    } catch (error) {
        console.log('Database is not connected',error)
    }
}

export default connect