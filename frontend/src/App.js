import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; //  for styling
import logo from './assets/images/your-logo.png'; // Update the path to your logo
import Header from './components/Header'; // the Header component
import Login from './pages/Login'; // Login page
import Dashboard from './pages/Dashboard'; // Dashboard page
import Accessibility from './pages/Accessibility'; // Accessibility page

function App() {
	  return (
		      <Router>
		        <div className="App">
		          {/* Header component */}
		          <Header />

		          {/* Main Welcome Section */}
		          <header className="App-header">
		            <img src={logo} className="App-logo" alt="Health Fitness Tracker Logo" />
		            <h1>Welcome to Health Fitness Tracker</h1>
		            <p>Track your fitness journey, monitor your progress, and stay healthy with ease.</p>
		            <div>
		              <a className="App-link" href="/login" target="_self" rel="noopener noreferrer">
		                Login
		              </a>
		              <a
		                className="App-link"
		                href="/register"
		                target="_self"
		                rel="noopener noreferrer"
		                style={{ marginLeft: '10px' }}
		              >
		                Register
		              </a>
		            </div>
		          </header>

		          {/* Routing Section */}
		          <Routes>
		            <Route path="/" element={<Login />} />
		            <Route path="/dashboard" element={<Dashboard />} />
		            <Route path="/accessibility" element={<Accessibility />} />
		          </Routes>
		        </div>
		      </Router>
		    );
}

export default App;
