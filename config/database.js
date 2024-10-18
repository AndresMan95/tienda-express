import mongoose from "mongoose";

let url=process.env.URI_MONGO; //para la conexion a la base de datos

async function connect(){
    try{
        await mongoose.connect(url);
        console.log("conectado a la base de datos");
    }catch(err){
        console.log(err);
    }
}

connect();