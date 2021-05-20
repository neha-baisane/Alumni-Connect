import React, { useState, useEffect } from 'react';
import { Form, Col, Row, Button, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import './LoginContainer.css';

function LoginForm() {
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
			<Form>
				<Row>
					<Col>
						{/* Sign Up form starts here */}

						<h3>Sign Up</h3>
						<hr></hr>
						<Form.Label>Full Name</Form.Label>
						<Form.Control
							placeholder='Name'
							onChange={(e) => {
								setFullName(e.target.value);
							}}
						/>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type='email'
							placeholder='Email'
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
						<Button variant='primary' className='Button' onClick={signUp}>
							Sign Up
						</Button>
					</Col>

					{/* Login form starts here */}

					<Col>
						<h3>Login</h3>
						<hr></hr>
						<Form.Label>Email address</Form.Label>
						<Form.Control
							type='email'
							placeholder='Email'
							onChange={(e) => {
								setEmailLog(e.target.value);
							}}
						/>
						<Form.Label>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							onChange={(e) => {
								setPasswordLog(e.target.value);
							}}
						/>
						<Button variant='primary' className='Button' onClick={login}>
							Login
						</Button>
					</Col>
				</Row>
			</Form>
		</div>
	);
}

export default LoginForm;
