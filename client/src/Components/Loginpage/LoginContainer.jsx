import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import LoginForm from './LoginForm';
import './LoginContainer.css';

class LoginContainer extends Component {
	render() {
		return (
			<div>
				<Card className='login_container'>
					<Card.Body>
						<Card.Title className='Card_title'>Alumni Connect</Card.Title>
						<Card.Subtitle className='mb-2 text-muted'>
							A place to share knowledge and better understand the world
						</Card.Subtitle>
						<LoginForm />
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default LoginContainer;
