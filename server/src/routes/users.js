import express from 'express';
import { EmailModel } from '../models/email.js';


const router = express.Router();

router.post("/register", async (req, res) => {
    const { firstName, lastName, email, number, message } = req.body;

    const newEmail = new EmailModel({firstName, lastName, email, number, message});
    await newEmail.save();

    res.json({message: "Email Being Sent!"});
});

export { router as userRouter };