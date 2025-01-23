import React from 'react';
import Header from './components/Header';
import logo from '../assets/images/logo192.png'; //  path to logo image

function Header() {
	    return (
		    <header style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
		    <img src={logo} alt="Health Fitness Tracker Logo" style={{ width: '100px', marginRight: '20px' }} />
		    <h1>Health Fitness Tracker</h1>
		    </header>
	    );
}

export default Header;
