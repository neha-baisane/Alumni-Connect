import React, { useState } from 'react';
import { Form, Col, Row, Button, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import './LoginContainer.css';

function SignupForm() {
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [emaillog, setEmailLog] = useState('');
	const [passwordlog, setPasswordLog] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const history = useHistory();

	const StudentsignUp = () => {
		Axios.post('http://localhost:3001/studentsignup', {
			fullName: fullName,
			email: email,
			password: password,
		}).then((response) => {
			console.log(response);
		});
		//window.location.replace('/login');
		history.push('/login');
	};

	const AlumnisignUp = () => {
		Axios.post('http://localhost:3001/alumnisignup', {
			fullName: fullName,
			email: email,
			password: password,
		}).then((response) => {
			console.log(response);
		});
		//window.location.replace('/login');
		history.push('/login');
	};

	return (
		<div>
			{errorMessage && <Alert variant='danger'>{errorMessage}</Alert>}
			<Form>
				<Row>
					<Col>
						<h3 className='font-weight-light'>
							<img
								src='https://img.icons8.com/cute-clipart/2x/tie.png'
								class='rounded-circle'
								style={{ height: '2rem', width: '2rem' }}
							/>{' '}
							Alumni Sign Up
						</h3>
						<hr></hr>
						<Form.Label className='text-secondary'>Full Name</Form.Label>
						<Form.Control
							placeholder='Name'
							onChange={(e) => {
								setFullName(e.target.value);
							}}
						/>
						<Form.Label className='text-secondary'>Email address</Form.Label>
						<Form.Control
							type='email'
							placeholder='Email'
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<Form.Label className='text-secondary'>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
						<Button variant='success' className='Button' onClick={AlumnisignUp}>
							Sign Up
						</Button>
					</Col>

					{/* Login form starts here */}

					<Col>
						<h3 className='font-weight-light'>
							<img
								src='https://img.icons8.com/fluent/2x/student-female.png'
								class='rounded-circle'
								style={{ height: '2rem', width: '2rem' }}
							/>{' '}
							Student Sign Up
						</h3>
						<hr></hr>
						<Form.Label className='text-secondary'>Full Name</Form.Label>
						<Form.Control
							placeholder='Name'
							onChange={(e) => {
								setFullName(e.target.value);
							}}
						/>
						<Form.Label className='text-secondary'>Email address</Form.Label>
						<Form.Control
							type='email'
							placeholder='Email'
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<Form.Label className='text-secondary'>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
						<Button
							variant='success'
							className='Button'
							onClick={StudentsignUp}>
							Sign Up
						</Button>
					</Col>
				</Row>
			</Form>
		</div>
	);
}

export default SignupForm;
