import React, { useState, useEffect, useReducer } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
	const handleLogOut = () => {
		localStorage.clear();
		window.location.replace('/');
	};

	let history = useHistory();
	return (
		<Navbar
			bg='dark'
			variant='dark'
			style={{
				height: '80px',
				marginBottom: '20px',
				display: 'flex',
				width: '100%',
			}}>
			<Navbar.Brand href='#home'>Alumni Connect</Navbar.Brand>
			<Navbar.Collapse className='justify-content-end'>
				<Navbar.Text>
					{localStorage.getItem('email')}{' '}
					<Button onClick={handleLogOut}>Log Out</Button>
				</Navbar.Text>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavBar;
