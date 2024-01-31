import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import { userRouter } from './src/routes/users.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);

app.listen(3001, () => console.log("Server Started"));

app.get("/", (req, res) => {
    res.send("hi")
})

// mongoose.connect("mongodb+srv://armando12100:Jackie22@portfolio.0z2nggn.mongodb.net/Portfolio?retryWrites=true&w=majority")
