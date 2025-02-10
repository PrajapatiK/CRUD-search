const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors= require('cors');
const userRoute = require('./routes/index');

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 4001;

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to MongoDB Databse...');
}).catch(err => {
    console.log('Mongoose connection error...', err);
    
});

// app.use('/', (req, res) => {
//     res.send('Hello, World!');
// });
console.log('app called...');

app.use('/api', userRoute);

app.listen(PORT, () => {
   console.log(`Server listening on ${PORT}`);
});