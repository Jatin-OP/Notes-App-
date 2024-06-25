import mongoose from "mongoose";

const connectDB = async ()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/notes")
        .then(()=>{
            console.log(`MongoDb connected Successfully.`)
        })
        .catch((err)=>{
            console.log(`Error in connecting DB : ${err}`);
        })
    } catch (error) {
        console.log(`Error in connecting DB : ${error}`);
    }
}

export default connectDB;