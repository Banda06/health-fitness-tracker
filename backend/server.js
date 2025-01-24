const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config(); // Load environment variables
const app = express();
const PORT = process.env.PORT || 5000;

Middleware
app.use(express.json()); // Parse incoming JSON requests

// MongoDB Connection
(async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log('MongoDB connected successfully');
	} catch (err) {
		console.error('MongoDB connection error:', err);
		process.exit(1); // Exit the application with a failure code
	}
})();

// Routes

app.use('/api/users', userRoutes); // Route for user-related operations

// Error Handling Middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(err.status || 500).json({
		message: err.message || 'Internal Server Error',
	});
});

// Start the Server (only if not in test environment)
if (process.env.NODE_ENV !== 'test') {
	app.listen(PORT, () => {
		console.log(`Server running on http://localhost:${PORT}`);
	});
}
module.exports = app; // Export the app for testing
