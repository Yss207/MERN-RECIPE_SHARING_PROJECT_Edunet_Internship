import express from 'express';
import mongoose from 'mongoose';
import userRouter from './Routes/user.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Use built-in express.json() middleware
app.use(express.json());

// User router
app.use('/api', userRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI).then(
    () => console.log("MongoDB connected successfully..")
).catch(
    (err) => console.log(err)
)

const port = 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
