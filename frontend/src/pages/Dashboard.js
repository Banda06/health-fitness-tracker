import React, { useState, useEffect } from 'react';
import './Dashboard.css';

function Dashboard() {
	const [data, setData] = useState(null);

	useEffect(() => {
		const fetchData = async () => { 
		    const response = await fetch('/api/dashboard-data'); // Replace with actual API
		    const result = await response.json();
		    setData(result);
	    };
	    fetchData();
        }, []);

	return (
	    <div>
		<header>
		    <h1>Dashboard</h1>
		</header>
		<nav>
		    <ul>
		        <li><a href="/profile">Profile</a></li>
		        <li><a href="/settings">Settings</a></li>
		        <li><a href="/reports">Reports</a></li>
		    </ul>
		</nav>
		<main>
		    {data ? (
			<section>
			    <h2>Welcome, {data.user.name}</h2>
			    <p>You have {data.notifications} new notifications.</p>
			</section>
		    ) : (
			<p>Loading...</p>
		    )}
		</main>
		<footer>
		    <p>&copy; 2025 Your Company</p>
		</footer>
		</div>
	);
}

export default Dashboard;
