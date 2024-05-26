require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;
const secretKey = process.env.JWT_SECRET;

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
}, { versionKey: false });

const User = mongoose.model('User', userSchema);

app.post('/api/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        //Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
        });

        await newUser.save();
        res.status(201).json({ message: `User Registered Successfully` });
    } catch (error) {
        console.error("Error Registering User", error);
        res.status(500).json({ error: 'An error occurred while Registering User.' });
    }
})

app.post('/api/signin', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET);
            res.status(201).json({ token });
        } else {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }
    } catch (error) {
        console.error('Signin error:', error);
        res.status(500).json({ message: 'Signin failed' });
    }
});

function auth(req, res, next) {
    const token = req.headers['authorization'];
    if (typeof token !== 'undefined') {
        jwt.verify(token.split(' ')[1], secretKey, (err, authData) => {
            if (err) {
                res.sendStatus(403);
            } else {
                req.authData = authData;
                next();
            }
        });
    } else {
        res.sendStatus(401);
    }
};


// API endpoint to handle POST requests for feedback data
app.post('/api/feedback', auth, async (req, res) => {
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
