import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Accordion, Form } from 'react-bootstrap';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { useHistory } from 'react-router-dom';

const BoxPost = () => {
	const [description, setDescription] = useState('');
	const [image, setImage] = useState([]);
	const history = useHistory();
	const upload = () => {
		const formData = new FormData();
		formData.append('file', image[0]);
		formData.append('upload_preset', 'sa4al9tg');
		axios
			.post(
				`https://api.cloudinary.com/v1_1/sakshi-mini-project/image/upload`,
				formData
			)
			.then((response) => {
				console.log('cloudinary done');
				const fileName = response.data.public_id;
				axios
					.post('http://localhost:3001/upload', {
						description: description,
						image: fileName,
						author: localStorage.getItem('email'),
					})
					.then((response) => {
						console.log('cloudinary done');
						history.push('/events');
					});
			});
	};
	return (
		<>
			<Accordion>
				<Card
					border='light'
					style={{
						display: 'flex',
						marginLeft: '10%',
						width: '38rem',
						height: 'auto',
						cursor: 'pointer',
					}}>
					<Card.Header
						style={{
							display: 'flex',
							flexDirection: 'row',
							width: '100%',
							fontSize: '20px',
						}}>
						<Accordion.Toggle
							as={Card.Text}
							eventKey='0'
							style={{ height: 'auto', width: '38rem' }}>
							<PostAddIcon
								alt='User Name'
								style={{
									marginRight: '8px',
									height: '25px',
									width: '45px',
									color: 'black',
								}}
							/>
							Start a Post
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey='0'>
						<Card.Body
							style={{
								display: 'flex',
								flexDirection: 'row',
								marginTop: '2px',
							}}>
							<Accordion>
								<Card
									style={{
										display: 'flex',
										width: '33rem',
										height: 'auto',
									}}>
									<Card.Header
										style={{
											display: 'flex',
											width: 'auto',
											height: 'auto',
										}}>
										<Accordion.Toggle
											as={Card.Text}
											eventKey='0'
											style={{ height: '2rem', width: '8rem' }}>
											Post image
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey='0'>
										<Card.Body>
											<Form>
												<Form.Group controlId='exampleForm.ControlTextarea1'>
													<Form.Label>Enter Description </Form.Label>
													<Form.Control
														as='textarea'
														rows={3}
														onChange={(event) => {
															setDescription(event.target.value);
														}}
													/>
												</Form.Group>
												<div
													style={{
														display: 'flex',
														flexDirection: 'Row',
													}}>
													<Form.Group>
														{/* <Form.File
															className='position-relative'
															required
															name='file'
															label='Upload photo'
															id='validationFormik107'
															feedbackTooltip
														/> */}
														<Form.File
															id='exampleFormControlFile1'
															label='Example file input'
															onChange={(event) => {
																setImage(event.target.files);
															}}
														/>
													</Form.Group>
													<Button
														onClick={upload}
														variant='dark'
														style={{
															marginLeft: '80px',
															marginTop: '25px',
															height: '2rem',
															width: '4rem',
														}}>
														Post
													</Button>
												</div>
											</Form>
										</Card.Body>
									</Accordion.Collapse>
								</Card>

								<Card>
									<Card.Header
										style={{
											display: 'flex',
											width: 'auto',
											height: 'auto',
										}}>
										<Accordion.Toggle
											as={Card.Text}
											eventKey='1'
											style={{ height: '2rem', width: '8rem' }}>
											Write article
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey='1'>
										<Card.Body>
											<Form>
												<Form.Group controlId='exampleForm.ControlTextarea1'>
													<Form.Label>Enter Description </Form.Label>
													<Form.Control as='textarea' rows={3} required />
												</Form.Group>
												<Button
													variant='dark'
													type='submit'
													style={{
														marginLeft: '225px',
													}}>
													Post
												</Button>
											</Form>
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
			<br />
		</>
	);
};

export default BoxPost;
