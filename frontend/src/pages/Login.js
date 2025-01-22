import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [rememberMe, setRememberMe] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!email.includes('@')) {
			alert('Please enter a valid email address');
			return;
		}
		if (password.length < 6) {
			alert('Password must be at least 6 characters long');
			return;
		}
		try {
		    const response = await axios.post('/api/login', { email, password, rememberMe });
			console.log('Login successful:', response.data);
			// Handle success (e.g., redirect, save token)
		} catch (error) {
			console.error('Login failed:', error.response?.data || error.message);
			alert('Login failed. Please check your credentials.');
		}
	};

	return (
	<div className="login-container">
		<h1>Login Page</h1>
		<form onSubmit={handleSubmit}>
			<label htmlFor="email">Email:</label>
			<input 
				id="email"
				type="email" 
				value={email} 
				onChange={(e) => setEmail(e.target.value)} 
				required 
				aria-label="Enter your email"
			    />
			    <br />
			   <label htmlFor="password">Password:</label>
			   <input 
				id="password"
				type="password" 
				value={password} 
				onChange={(e) => setPassword(e.target.value)} 
				required 
				aria-label="Enter your password"
		/>
		<br />
		<label>
			<input 
				type="checkbox" 
				checked={rememberMe} 
				onChange={(e) => setRememberMe(e.target.checked)} 
		/>
		Remember Me
	</label>
	<br />
	<p>
		<a href="/forgot-password" style={{ color: 'blue', textDecoration: 'underline' }}>
		Forgot Password?
		</a>
	</p>
	<button type="submit">Login</button>
	<div>
		<button onClick={() => console.log('Login with Google')}>Login with Google</button>
		<button onClick={() => console.log('Login with Facebook')}>Login with Facebook</button>
	</div>
		</form>
	</div>
	);
}

export default Login;
