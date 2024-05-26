require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection URL
const mongoURI = process.env.mongoURI;

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

// Feedback Schema
const feedbackSchema = new mongoose.Schema({
    name: String,
    email: String,
    firstVisit: String,
    found: String,
    qualityRating: Number,
    recommendRating: Number,
    suggestions: String
}, { versionKey: false });

// Feedback Model
const Feedback = mongoose.model('Feedback', feedbackSchema);


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
}, {versionKey: false});

const User = mongoose.model('User', userSchema);

app.post('/api/signup', async(req, res) => {
    try {
        const {name, email, password} = req.body;
        const newUser = new User({
            name, email, password
        });
        await newUser.save();
        res.status(201).json({message: `User Registered Successfully`});
    } catch (error) {
        console.error("Error Registering User", error);
        res.status(500).json({ error: 'An error occurred while Registering User.' });
    }
})

app.post('/api/signin', async(req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        if(user.password === password)
            return res.status(201).json({ message: 'Signin successful' });
        else
            return res.status(400).json({ message: 'Invalid credentials' });
    }
    catch(error){
        console.error('Signin error:', error);
        res.status(500).json({ message: 'Signin failed' });
    }
})

// API endpoint to handle POST requests for feedback data
app.post('/api/feedback', async (req, res) => {
    try {
        const { name, email, firstVisit, found, qualityRating, recommendRating, suggestions } = req.body;
        
        // Create a new feedback document
        const newFeedback = new Feedback({
            name,
            email,
            firstVisit,
            found,
            qualityRating,
            recommendRating,
            suggestions
        });

        // Save the feedback to MongoDB
        await newFeedback.save();
        
        res.status(201).json({ message: 'Feedback received successfully!' });
    } catch (error) {
        console.error('Error saving feedback:', error);
        res.status(500).json({ error: 'An error occurred while saving feedback.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
