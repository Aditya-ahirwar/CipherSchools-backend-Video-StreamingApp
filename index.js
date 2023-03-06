import express, { response } from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
import UserRoute from './routes/users.js'
import UserAuth from './routes/auth.js'
import cookieParser from "cookie-parser";
import User from "./routes/users.js";
import videoRoutes from './routes/video.js'
import commentRouter from './routes/comments.js'
const PORT = process.env.PORT || 8800;

const app = express();
dotenv.config();

app.use(cookieParser())
app.use(express.json())
app.use((err, req, res, next) => {
    return res.status(err.status).json({
        "message" : err.message,
        "status" : err.status
    })
})

app.use('/api/auth', UserAuth)
app.use('/api/user', User)
app.use("/api/videos", videoRoutes);
app.use('/api/comments', commentRouter)
// app.use("/api/comments", commentRoutes);


const connect = ()=>{
    mongoose.connect(process.env.SECRET_KEY)
    .then(()=>{console.log("DB connected")})
    .catch((err) =>{ throw err ;})
}


app.listen(PORT, ()=>{
    connect();
    console.log("server is up");
})