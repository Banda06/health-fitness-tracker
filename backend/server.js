t express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// app.use(express.json());
//
// // MongoDB Connection
// (async () => {
//     try {
//             await mongoose.connect(process.env.MONGO_URI, {
//                         useNewUrlParser: true,
//                                     useUnifiedTopology: true,
//                                             });
//                                                     console.log('MongoDB connected');
//                                                         } catch (err) {
//                                                                 console.error('MongoDB connection error:', err);
//                                                                         process.exit(1); // Exit process with failure
//                                                                             }
//                                                                             })();
//
//                                                                             // Routes
//                                                                             app.use('/api/users', userRoutes);
//
//                                                                             // Error Handling Middleware
//                                                                             app.use((err, req, res, next) => {
//                                                                                 console.error(err.stack);
//                                                                                     res.status(err.status || 500).json({
//                                                                                             message: err.message || 'Internal Server Error',
//                                                                                                 });
//                                                                                                 });
//
//                                                                                                 app.listen(PORT, () => {
//                                                                                                     console.log(`Server running on port ${PORT}`);
//                                                                                                     });
//
//                                                                                                     // Directory: backend/routes
//                                                                                                     // File: userRoutes.js
//                                                                                                     const express = require('express');
//                                                                                                     const router = express.Router();
//                                                                                                     const { registerUser, loginUser } = require('../controllers/userController');
//
//                                                                                                     router.post('/register', registerUser);
//                                                                                                     router.post('/login', loginUser);
//
//                                                                                                     module.exports = router;
