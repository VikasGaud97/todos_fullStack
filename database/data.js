import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();
const DATABASE = process.env.DB_DATABASE;
// const PASSWORD = process.env.DB_PASSWORD;


const DataConnection = () => {

    mongoose.connect(DATABASE, { useNewUrlParser: true })
    .then(()=>{
      console.log("data connection is sucessful with mongoDB database")
    }).catch((err)=>{
      console.log("while connnecting to database there is "+ err.message)
    })

     
     }


export default DataConnection;