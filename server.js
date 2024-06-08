// const express = require('express');
// const mongoose = require('mongoose');
// const apiRoutes = require('./routes/api');

// const app = express();
// const PORT =3000;

// // MongoDB Atlas connection
// mongoose.connect('mongodb+srv://prajwalah28:Dz2p3hQbrbr3FVEq@cluster0.merm1qd.mongodb.net/connectdb', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Connected to MongoDB Atlas'))
//     .catch(err => console.error('Failed to connect to MongoDB Atlas', err));

// app.use(express.json());

// // Routes
// app.use('/api', apiRoutes);

// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors middleware
const apiRoutes = require('./routes/api');

const app = express();
const PORT = 3000;

// MongoDB Atlas connection
mongoose.connect('mongodb+srv://prajwalah28:Dz2p3hQbrbr3FVEq@cluster0.merm1qd.mongodb.net/connectdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(err => console.error('Failed to connect to MongoDB Atlas', err));

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173' // Set the origin to allow requests from localhost:3001
}));

// Routes
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
