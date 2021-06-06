import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Form, Button, Card, Col } from 'react-bootstrap';
import PersonIcon from '@material-ui/icons/Person';
//import { useHistory } from 'react-router-dom';

const RegisterProfile = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [location, setLocation] = useState('');
	const [current_job, setCurrent_job] = useState('');
	const [experience, setExperience] = useState('');
	const [edu, setEdu] = useState('');
	const [pass_year, setPass_year] = useState('');
	const [skills, setSkills] = useState('');
	const [bio, setBio] = useState('');
	const [image, setImage] = useState([]);
	//let history = useHistory();
	const register = () => {
		const formData = new FormData();
		formData.append('file', image[0]);
		formData.append('upload_preset', 'yhvohjdd');
		axios
			.post(
				`https://api.cloudinary.com/v1_1/sakshi-mini-project/image/upload`,
				formData
			)
			.then((response) => {
				const fileName = response.data.public_id;
				console.log('cloudinary done');
				axios
					.post('http://localhost:3001/register', {
						name: name,
						email: email,
						location: location,
						current_job: current_job,
						experience: experience,
						edu: edu,
						pass_year: pass_year,
						skills: skills,
						bio: bio,
						image: fileName,
					})
					.then((response) => {
						if (response.data.err) console.log(response.data.err);
						else {
							console.log('database done');
							window.location.reload();
						}
					});
			});
	};
	return (
		<>
			<Card
				border='primary'
				style={{
					width: '40rem',
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
					Fill the Registration form to complete your profile
				</Card.Title>
				<Card.Body>
					<Form>
						<Form.Label>Name </Form.Label>
						<Form.Row>
							<Col>
								<Form.Control
									placeholder='Full name'
									required
									onChange={(event) => {
										setName(event.target.value);
									}}
								/>
							</Col>
						</Form.Row>
						<br />
						<Form.Group controlId='formBasicEmail'>
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type='email'
								placeholder='Enter email'
								required
								onChange={(event) => {
									setEmail(event.target.value);
								}}
							/>
						</Form.Group>
						<Form.Group controlId='exampleForm.ControlTextarea1'>
							<Form.Label>Enter Location</Form.Label>
							<Form.Control
								as='textarea'
								rows={1}
								required
								onChange={(event) => {
									setLocation(event.target.value);
								}}
							/>
						</Form.Group>
						<Form.Group controlId='exampleForm.ControlTextarea2'>
							<Form.Label>Enter Current Job</Form.Label>
							<Form.Control
								as='textarea'
								rows={1}
								required
								onChange={(event) => {
									setCurrent_job(event.target.value);
								}}
							/>
						</Form.Group>
						<Form.Group controlId='exampleForm.ControlTextarea3'>
							<Form.Label>Enter your experience</Form.Label>
							<Form.Control
								as='textarea'
								rows={3}
								required
								onChange={(event) => {
									setExperience(event.target.value);
								}}
							/>
						</Form.Group>
						<Form.Group controlId='formGridState'>
							<Form.Label>Education</Form.Label>
							<Form.Control
								as='select'
								defaultValue='Choose...'
								required
								onChange={(event) => {
									setEdu(event.target.value);
								}}>
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
							<Form.Control
								as='select'
								defaultValue='Choose...'
								required
								onChange={(event) => {
									setPass_year(event.target.value);
								}}>
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
							<Form.Control
								as='textarea'
								rows={2}
								required
								onChange={(event) => {
									setSkills(event.target.value);
								}}
							/>
						</Form.Group>
						<Form.Group controlId='exampleForm.ControlTextarea4'>
							<Form.Label>Description/Bio</Form.Label>
							<Form.Control
								as='textarea'
								rows={4}
								required
								onChange={(event) => {
									setBio(event.target.value);
								}}
							/>
						</Form.Group>
						<Form.Group>
							<Form.File
								className='position-relative'
								required
								name='file'
								label='Upload your Profile picture'
								id='validationFormik107'
								feedbackTooltip
								onChange={(event) => {
									setImage(event.target.files);
								}}
							/>
						</Form.Group>
						{/* <Form.Group>
							<Form.Check
								required
								name='terms'
								label='Agree to terms and conditions'
								id='validationFormik106'
								feedbackTooltip
							/>
						</Form.Group> */}
						<Button variant='success' onClick={register}>
							Submit form
						</Button>
					</Form>
				</Card.Body>
			</Card>
			<br />
		</>
	);
};

export default RegisterProfile;
