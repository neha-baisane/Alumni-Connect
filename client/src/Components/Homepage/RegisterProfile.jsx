import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, Card, Col, handleChange, errors } from 'react-bootstrap';
import PersonIcon from '@material-ui/icons/Person';

const RegisterProfile = () => {
	return (
		<>
			<Card
				border='primary'
				style={{
					width: '70rem',
					height: 'auto',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginLeft: '200px',
				}}>
				<Card.Header
					style={{
						display: 'flex',
						flexDirection: 'row',
						width: '100%',
						fontSize: '25px',
					}}>
					<PersonIcon
						alt='User Name'
						style={{
							marginRight: '8px',
							height: '45px',
							width: '45px',
						}}
					/>
					Profile Registration
				</Card.Header>
				<Card.Title style={{ marginTop: '8px' }}>
					Fill the Registration form to create your profile
				</Card.Title>
				<Card.Body>
					<Form>
						<Form.Label>Name </Form.Label>
						<Form.Row>
							<Col>
								<Form.Control placeholder='Full name' required />
							</Col>
						</Form.Row>
						<br />
						<Form.Group controlId='formBasicEmail'>
							<Form.Label>Email address</Form.Label>
							<Form.Control type='email' placeholder='Enter email' required />
						</Form.Group>
						<Form.Group controlId='exampleForm.ControlTextarea1'>
							<Form.Label>Enter Location</Form.Label>
							<Form.Control as='textarea' rows={1} required />
						</Form.Group>
						<Form.Group controlId='exampleForm.ControlTextarea2'>
							<Form.Label>Enter Current Job</Form.Label>
							<Form.Control as='textarea' rows={1} required />
						</Form.Group>
						<Form.Group controlId='exampleForm.ControlTextarea3'>
							<Form.Label>Enter your experience</Form.Label>
							<Form.Control as='textarea' rows={3} required />
						</Form.Group>
						<Form.Group controlId='formGridState'>
							<Form.Label>Education</Form.Label>
							<Form.Control as='select' defaultValue='Choose...' required>
								<option>Choose...</option>
								<option>Computer Engineering</option>
								<option>Mechanical Engineering</option>
								<option>Information Technology Engineering</option>
								<option>Civil Engineering</option>
								<option>Electrical Engineering</option>
							</Form.Control>
						</Form.Group>
						<Form.Group controlId='formGridState'>
							<Form.Label>Pass Out Year</Form.Label>
							<Form.Control as='select' defaultValue='Choose...' required>
								<option>Choose...</option>
								<option>2018</option>
								<option>2019</option>
								<option>2020</option>
								<option>2021</option>
								<option>2022</option>
								<option>2023</option>
							</Form.Control>
						</Form.Group>
						<Form.Group controlId='exampleForm.ControlTextarea3'>
							<Form.Label>Enter your Skills</Form.Label>
							<Form.Control as='textarea' rows={2} required />
						</Form.Group>
						<Form.Group controlId='exampleForm.ControlTextarea4'>
							<Form.Label>Description/Bio</Form.Label>
							<Form.Control as='textarea' rows={4} required />
						</Form.Group>
						<Form.Group>
							<Form.File
								className='position-relative'
								required
								name='file'
								label='Upload your Profile picture'
								id='validationFormik107'
								feedbackTooltip
							/>
						</Form.Group>
						<Form.Group>
							<Form.Check
								required
								name='terms'
								label='Agree to terms and conditions'
								id='validationFormik106'
								feedbackTooltip
							/>
						</Form.Group>
						<Button type='submit'>Submit form</Button>
					</Form>
				</Card.Body>
			</Card>
			<br />
		</>
	);
};

export default RegisterProfile;
