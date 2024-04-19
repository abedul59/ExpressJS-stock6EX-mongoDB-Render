const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGODB_URI;

try {
  mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}, () =>
  console.log("connected"));    
  }catch (error) { 
  console.log("could not connect");    
  }


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});