const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');
const dotenv = require('dotenv');

dotenv.config({ path: '.env.test' }); // Load test environment variables

beforeAll(async () => {
	    if (!process.env.MONGO_URI) {
		            throw new Error('MONGO_URI is not defined in environment variables.');
		        }
	    await mongoose.connect(process.env.MONGO_URI, {
		            useNewUrlParser: true,
		            useUnifiedTopology: true,
		        });
});

beforeEach(async () => {
	    await mongoose.connection.db.dropDatabase(); // Clear database before each test
});

afterAll(async () => {
	    await mongoose.connection.close();
});

describe('User API Tests', () => {
	    test('Register User', async () => {
		            const response = await request(app).post('/api/users/register').send({
				                name: 'Test User',
				                email: 'test@example.com',
				                password: 'password123',
				            });
		            expect(response.statusCode).toBe(201);
		            expect(response.body.message).toBe('User registered successfully');
		        });

	    test('Login User', async () => {
		            await request(app).post('/api/users/register').send({
				                name: 'Test User',
				                email: 'test@example.com',
				                password: 'password123',
				            });

		            const response = await request(app).post('/api/users/login').send({
				                email: 'test@example.com',
				                password: 'password123',
				            });
		            expect(response.statusCode).toBe(200);
		            expect(response.body.token).toBeDefined();
		        });

	    test('Invalid Email', async () => {
		            const response = await request(app).post('/api/users/login').send({
				                email: 'wrong@example.com',
				                password: 'password123',
				            });
		            expect(response.statusCode).toBe(404);
		            expect(response.body.message).toBe('User not found');
		        });

	    test('Invalid Password', async () => {
		            await request(app).post('/api/users/register').send({
				                name: 'Test User',
				                email: 'test@example.com',
				                password: 'password123',
				            });

		            const response = await request(app).post('/api/users/login').send({
				                email: 'test@example.com',
				                password: 'wrongpassword',
				            });
		            expect(response.statusCode).toBe(400);
		            expect(response.body.message).toBe('Invalid credentials');
		        });

	    test('Missing Fields During Registration', async () => {
		            const response = await request(app).post('/api/users/register').send({
				                email: 'test@example.com',
				            });
		            expect(response.statusCode).toBe(400);
		            expect(response.body.message).toMatch(/"name" is required/);
		        });
});
