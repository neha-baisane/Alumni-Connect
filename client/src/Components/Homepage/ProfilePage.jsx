import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Card,
	Row,
	Col,
	Container,
	Alert,
	Dropdown,
	ButtonGroup,
	Button,
	Modal,
	InputGroup,
	FormControl,
} from 'react-bootstrap';
import { Image } from 'cloudinary-react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProfilePage() {
	let { id } = useParams();
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [show, setShow] = useState(false);
	const [profile, setProfile] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	var user_name = localStorage.getItem('email');

	const [newBio, setNewBio] = useState('');
	const updateBio = (alumni_id) => {
		axios.put('http://localhost:3001/updateBio', {
			alumni_id: alumni_id,
			bio: newBio,
		});
		setNewBio('');
	};

	const [newSkills, setNewSkills] = useState('');
	const updateSkills = (alumni_id) => {
		axios.put('http://localhost:3001/updateSkills', {
			alumni_id: alumni_id,
			skills: newSkills,
		});
		setNewSkills('');
	};

	const [newEducation, setNewEducation] = useState('');
	const updateEducation = (alumni_id) => {
		axios.put('http://localhost:3001/updateEducation', {
			alumni_id: alumni_id,
			education: newEducation,
		});
		setNewEducation('');
	};

	const [newCurrent_job, setNewCurrent_job] = useState('');
	const updateCurrent_job = (alumni_id) => {
		axios.put('http://localhost:3001/updateCurrent_job', {
			alumni_id: alumni_id,
			current_job: newCurrent_job,
		});
		setNewCurrent_job('');
	};

	const [newExperience, setNewExperience] = useState('');
	const updateExperience = (alumni_id) => {
		axios.put('http://localhost:3001/updateExperience', {
			alumni_id: alumni_id,
			experiences: newExperience,
		});
		setNewExperience('');
	};

	const [newLocation, setNewLocation] = useState('');
	const updateLocation = (alumni_id) => {
		axios.put('http://localhost:3001/updateLocation', {
			alumni_id: alumni_id,
			location: newLocation,
		});
		setNewLocation('');
	};

	const [newAlumni_name, setNewAlumni_name] = useState('');
	const updateAlumni_name = (alumni_id) => {
		axios.put('http://localhost:3001/updateAlumni_name', {
			alumni_id: alumni_id,
			alumni_name: newAlumni_name,
		});
		setNewAlumni_name('');
	};

	useEffect(() => {
		axios.get(`http://localhost:3001/profile/byId/${id}`).then((response) => {
			if (response.data.message) {
				setErrorMessage(response.data.message);
			} else setProfile(response.data);
		});
	});

	const deleteProfile = (alumni_id) => {
		axios
			.delete(`http://localhost:3001/deleteProfile/${alumni_id}`)
			.then((response) => {
				setProfile(
					profile.filter((value) => {
						return value.alumni_id !== alumni_id;
					})
				);
			});
	};

	return (
		<div>
			{errorMessage ? <Alert variant='danger'>{errorMessage}</Alert> : null}
			{profile.map((value, key) => {
				return (
					<>
						<Card
							className='shadow'
							border='light'
							key={value.alumni_id}
							style={{
								width: '38rem',
								marginLeft: '15%',

								height: 'auto',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<Container>
								<Row>
									<Col className='block-example  border-dark' sm={3}>
										<Image
											style={{
												width: '8rem',
												height: '150px',
												alignSelf: 'center',
												margin: '20px',
												borderRadius: '50%',
											}}
											cloudName='sakshi-mini-project'
											publicId={value.profile_link}
										/>
									</Col>
									<Col>
										<Card.Body>
											{user_name === value.email ? (
												<>
													<Dropdown as={ButtonGroup}>
														<Dropdown.Toggle
															split
															id='dropdown-custom-2'
															style={{
																marginTop: '5px',
																marginLeft: '590%',
																height: '30px',
																width: 'auto',
																float: 'right',
																backgroundColor: 'black',
															}}
														/>
														<Dropdown.Menu className='super-colors'>
															<Dropdown.Item
																eventKey='1'
																onClick={() => {
																	deleteProfile(value.alumni_id);
																}}>
																Delete Profile
															</Dropdown.Item>

															<Dropdown.Item
																eventKey='2'
																onClick={() => {
																	setShow(!show);
																}}>
																Update Profile
															</Dropdown.Item>
														</Dropdown.Menu>
													</Dropdown>
												</>
											) : null}

											<Card.Title
												style={{
													fontSize: '35px',
												}}>
												{value.alumni_name}
												{show && (
													<>
														<input
															className='form-control-sm'
															style={{
																height: '1rem',
																width: '4rem',
																marginLeft: '40px',
															}}
															type='text'
															onChange={(e) => {
																setNewAlumni_name(e.target.value);
															}}></input>{' '}
														<Button
															variant='success'
															style={{
																height: '20px',
																width: 'auto',
																fontSize: '7px',
																marginTop: '5px',
															}}
															onClick={() => {
																updateAlumni_name(value.alumni_id);
															}}>
															Update
														</Button>
													</>
												)}
											</Card.Title>

											<Card.Text style={{ fontSize: '15px' }}>
												<b>Email</b> : {value.email}
											</Card.Text>

											<Card.Text style={{ fontSize: '15px' }}>
												<b>Location </b> : {value.location}
												{show && (
													<>
														<input
															className='form-control-sm'
															style={{
																height: '1rem',
																width: '4rem',
																marginLeft: '40px',
															}}
															type='text'
															onChange={(e) => {
																setNewLocation(e.target.value);
															}}></input>{' '}
														<Button
															variant='success'
															style={{
																height: '20px',
																width: 'auto',
																fontSize: '7px',
																marginTop: '0px',
															}}
															onClick={() => {
																updateLocation(value.alumni_id);
															}}>
															Update
														</Button>
													</>
												)}
											</Card.Text>
										</Card.Body>
									</Col>
								</Row>
							</Container>
						</Card>
						<br />
						<Card
							className='shadow'
							border='light'
							style={{
								width: '38rem',
								marginLeft: '15%',
								height: 'auto',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								backgroundColor: '#e0ebeb',
							}}>
							<Card.Body style={{ textSizeAdjust: '25px' }}>
								<Card.Title className='font-weight-bold'>
									Bio
									{show && (
										<>
											<input
												className='form-control-sm'
												style={{
													height: '1rem',
													width: '4rem',
													marginLeft: '40px',
												}}
												type='text'
												onChange={(e) => {
													setNewBio(e.target.value);
												}}></input>{' '}
											<Button
												variant='success'
												style={{
													height: '20px',
													width: 'auto',
													fontSize: '7px',
													marginTop: '0px',
												}}
												onClick={() => {
													updateBio(value.alumni_id);
												}}>
												Update
											</Button>
										</>
									)}
								</Card.Title>

								<Card.Text className='font-italic' style={{ fontSize: '20px' }}>
									{value.bio}
								</Card.Text>
							</Card.Body>
						</Card>
						<br />
						<Card
							className='shadow'
							border='light'
							style={{
								width: '38rem',
								marginLeft: '15%',
								backgroundColor: '#b3cccc',
								height: 'auto',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
							}}>
							<Card.Body style={{ textSizeAdjust: '20px' }}>
								<Card.Title style={{ fontSize: '25px' }}>
									Skills{' '}
									{show && (
										<>
											<input
												className='form-control-sm'
												style={{
													height: '1rem',
													width: '4rem',
													marginLeft: '40px',
												}}
												type='text'
												onChange={(e) => {
													setNewSkills(e.target.value);
												}}></input>{' '}
											<Button
												variant='success'
												style={{
													height: '20px',
													width: 'auto',
													fontSize: '7px',
													marginTop: '0px',
												}}
												onClick={() => {
													updateSkills(value.alumni_id);
												}}>
												Update
											</Button>
										</>
									)}
								</Card.Title>
								<Card.Subtitle>{value.skills}</Card.Subtitle>
								<br></br>
								<Card.Title style={{ fontSize: '25px' }}>
									Education{' '}
									{show && (
										<>
											<input
												className='form-control-sm'
												style={{
													height: '1rem',
													width: '4rem',
													marginLeft: '10px',
												}}
												type='text'
												onChange={(e) => {
													setNewEducation(e.target.value);
												}}></input>{' '}
											<Button
												variant='success'
												style={{
													height: '20px',
													width: 'auto',
													fontSize: '7px',
													marginTop: '0px',
												}}
												onClick={() => {
													updateEducation(value.alumni_id);
												}}>
												Update
											</Button>
										</>
									)}
								</Card.Title>
								<Card.Subtitle>{value.education}</Card.Subtitle>
								<br></br>
								<Card.Title style={{ fontSize: '25px' }}>
									Passout Year
								</Card.Title>
								<Card.Subtitle>{value.passout_year}</Card.Subtitle>
								<br></br>
								<Card.Title style={{ fontSize: '25px' }}>
									Current Job
									{show && (
										<>
											<input
												className='form-control-sm'
												style={{
													height: '1rem',
													width: '4rem',
													marginLeft: '10px',
												}}
												type='text'
												onChange={(e) => {
													setNewCurrent_job(e.target.value);
												}}></input>{' '}
											<Button
												variant='success'
												style={{
													height: '20px',
													width: 'auto',
													fontSize: '7px',
													marginTop: '0px',
												}}
												onClick={() => {
													updateCurrent_job(value.alumni_id);
												}}>
												Update
											</Button>
										</>
									)}
								</Card.Title>
								<Card.Subtitle>{value.current_job}</Card.Subtitle>
								<br />
								<Card.Title
									style={{
										fontSize: '25px',
									}}>
									Experience
									{show && (
										<>
											<input
												className='form-control-sm'
												style={{
													height: '1rem',
													width: '4rem',
													marginLeft: '10px',
												}}
												type='text'
												onChange={(e) => {
													setNewExperience(e.target.value);
												}}></input>{' '}
											<Button
												variant='success'
												style={{
													height: '20px',
													width: 'auto',
													fontSize: '7px',
													marginTop: '0px',
												}}
												onClick={() => {
													updateExperience(value.alumni_id);
												}}>
												Update
											</Button>
										</>
									)}
								</Card.Title>
								<Card.Subtitle>{value.experiences}</Card.Subtitle>
							</Card.Body>
						</Card>
					</>
				);
			})}
		</div>
	);
}

export default ProfilePage;
