import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import {fileURLToPath} from 'url'

dotenv.config();
 
const app = express();

//fix dirname for ES module 
const __filename = fileURLToPath(import.meta.url);
const  __dirname = path.dirname(__filename);

//middileware
app.use(express.json());
app.use(express.urlencoded({ extended :true}));


//static file 
app.use(express.static(path.join(__dirname, "../public")))

//view engine
app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));




const PORT = process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("server running ..")
})