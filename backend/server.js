import express from 'express';
import mongoose from 'mongoose';
import userRouter from './Routes/user.js';

const app = express();

// Use built-in express.json() middleware
app.use(express.json());

// User router
app.use('/api', userRouter);

// Connect to MongoDB
mongoose.connect('mongodb+srv://suryawanshiyash07:DdrQiiednOEhWLwF@cluster0.wrgw7.mongodb.net/', {
    dbName: 'MERN_Recipe'
}).then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('MongoDB Connection Error:', err));

const port = 3000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
