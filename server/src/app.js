import express from "express";
import cors from "cors";
import cookieparser from "cookie-parser"
const app=express();



app.use(cors({
    origin:'http://localhost:8000',
    
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));





app.use(cookieparser());

import userroutes from "./routes/userroutes.js"

app.use("/Dental/user",userroutes);
// http://localhost:8000/Dental/user/createuser

export {app}