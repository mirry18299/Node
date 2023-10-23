 // app.js
 const express = require('express');
 const app = express();
 const mongoose = require('mongoose');

 // Connect to MongoDB
 mongoose.connect('mongodb+srv://jepchumbamirriam04:@mir*1999@cluster0.oxbakma.mongodb.net/?retryWrites=true&w=majority', {
     useNewUrlParser: true,
     useUnifiedTopology: true
 })
 .then(() => console.log('Connected to MongoDB'))
 .catch(err => console.error('Error connecting to MongoDB:', err));


// ...

// body-parser middleware
app.use(express.json());

// Import your routes
const todosRouter = require("./routes/todos");

// Use your routes
app.use('/todos', todosRouter);

// ...
 // Define your routes here

 const port = process.env.PORT || 3000;
 app.listen(port, () => {
     console.log(`Server is running on port ${port}`);
 });
