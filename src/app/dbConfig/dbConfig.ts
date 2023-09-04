import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection=mongoose.connection

        connection.on('connected', () => {
            console.log('someone connected successfully');
          });
        connection.on('error', (err) => {
            console.log('someting wrong please maku sure mongoDB is running.'+err);
            process.exit();
          });
        
    } catch (error) {
        console.log(error)
    }
}