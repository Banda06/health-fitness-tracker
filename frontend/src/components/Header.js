import React from 'react';
import logo from '../assets/images/logo192.png'; // Update the path if necessary

function Header() {
	    return (
		    <header style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
		    <img src={logo} alt="Health Fitness Tracker Logo" style={{ width: '100px', marginRight: '20px' }} />
		    <h1>Health Fitness Tracker</h1>
		    </header>
	    );
}

export default Header;
