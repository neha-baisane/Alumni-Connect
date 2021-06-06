import React, { useState } from 'react';
import {
	Form,
	Col,
	Row,
	Button,
	Alert,
	Navbar,
	Nav,
	Image,
	Card,
} from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';
import Axios from 'axios';
//import './LoginContainer.css';
import Footer from './Footer';
import logo1 from './logo1.png';

function Home() {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emaillog, setEmailLog] = useState('');
	const [passwordlog, setPasswordLog] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const history = useHistory();

	const signUp = () => {
		Axios.post('http://localhost:3001/signup', {
			fullName: fullName,
			email: email,
			password: password,
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response);
			});
	};

	const login = () => {
		Axios.post('http://localhost:3001/login', {
			email: emaillog,
			password: passwordlog,
		}).then((response) => {
			if (response.data.loggedIn) {
				localStorage.setItem('loggedIn', true);
				localStorage.setItem('email', response.data.email);
				history.push('/feed');
				window.location.reload(true);
			} else {
				setErrorMessage(response.data.message);
			}
		});
	};

	return (
		<div>
			{errorMessage && <Alert variant='danger'>{errorMessage}</Alert>}

			<Navbar
				bg='light'
				// expand='lg'
				className='shadow-sm p-3 mb-5 bg-white rounded border-bottom'>
				<Navbar.Brand href='#home'>
					<img
						src={logo1}
						alt='loading...'
						style={{
							float: 'left',
							height: '50px',
							width: '120px',
						}}
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
					<Nav>
						<Nav.Link>
							<Link
								to='/login'
								style={{ textDecoration: 'none', color: '#758E91' }}>
								Login
							</Link>
						</Nav.Link>

						<Nav.Link>
							<Link
								to='/signup'
								style={{ textDecoration: 'none', color: '#758E91' }}>
								Sign up
							</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Row>
				<Col style={{ marginLeft: '5px' }}>
					<h1
						style={{
							marginTop: '5px',
							fontFamily: 'cursive',
							color: '#58565A',
						}}>
						Alumni Connect
					</h1>
					<h1
						style={{
							marginTop: '5px',
							fontFamily: 'cursive',
							color: '#758E91',
						}}>
						A place to share knowledge and better understand the world
					</h1>
					<Row style={{ marginLeft: '5px', marginTop: '25px' }}>
						<Card
							className='shadow p-3 mb-5 bg-white rounded font-italic'
							style={{ width: '18rem', height: 'auto', margin: '8px' }}>
							<Card.Body>
								The Alumni Connect web app will act as a medium to bridge the
								gap between students and alums by providing exposure to all the
								necessary knowledge required which is not currently included in
								academics.
							</Card.Body>
						</Card>
						<Card
							className='shadow p-3 mb-5 bg-white rounded font-italic'
							style={{ width: '18rem', height: 'auto', margin: '8px' }}>
							<Card.Body>
								Freshers have the opportunity to network with recent graduates
								as well as their seniors and these connections can lead to
								internships, jobs and many other valuable career opportunities.
							</Card.Body>
						</Card>
					</Row>
				</Col>
				<Col>
					<Image
						src='https://img.freepik.com/free-vector/graduates-wearing-face-masks-set_23-2148571650.jpg?size=626&ext=jpg'
						fluid
					/>
				</Col>
			</Row>
			<Footer />
		</div>
	);
}

export default Home;
