import mongoose from "mongoose";
export const connectToDB = async () => {
    try {
     const connection = await mongoose.connect(process.env.MONGO_DB_URL,{
        dbName:"mycompany",
        useNewUrlParser:true,
        useUnifiedTopology:true
     });
        console.log("Connected to MongoDB",connection);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};