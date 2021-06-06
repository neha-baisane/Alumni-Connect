import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Accordion, Form } from 'react-bootstrap';
import PostAddIcon from '@material-ui/icons/PostAdd';

const BoxPost = () => {
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
				const fileName = response.data.public_id;
				console.log('cloudinary done');
				axios
					.post('http://localhost:3001/gallery', {
						author: localStorage.getItem('email'),
						image: fileName,
					})
					.then((response) => {
						//console.log('database done');
						//window.location.reload(true);
						history.push('/gallery');
					});
			});
	};
	return (
		<>
			<Accordion>
				<Card
					className='shadow-sm'
					style={{
						display: 'flex',
						marginLeft: '15%',
						width: '38rem',
						height: 'auto',
						cursor: 'pointer',
						//backgroundColor: '#219EB2',
					}}>
					<Card.Header
						style={{
							display: 'flex',
							flexDirection: 'row',
							width: '100%',

							fontSize: '18px',
						}}>
						<Accordion.Toggle
							as={Card.Text}
							eventKey='0'
							style={{ height: 'auto', width: '38rem', color: '#3e4444' }}>
							<img
								src='https://img.icons8.com/plasticine/2x/image.png'
								class='rounded-circle'
								style={{ height: '2rem', width: '2rem' }}
							/>{' '}
							Add Image
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey='0'>
						<Card.Body
							style={{
								display: 'flex',
								flexDirection: 'row',
								marginTop: '2px',
							}}>
							<Form>
								<div
									style={{
										display: 'flex',
										flexDirection: 'Row',
									}}>
									<Form.Group>
										<Form.File
											id='exampleFormControlFile2'
											onChange={(event) => {
												setImage(event.target.files);
											}}
										/>
									</Form.Group>
									<Button
										onClick={upload}
										variant='success'
										className='btn-sm'
										style={{
											marginLeft: '80px',
											height: '2rem',
											width: '4rem',
											alignItems: 'center',
											justifyContent: 'center',
										}}>
										Post
									</Button>
								</div>
							</Form>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
			<br />
		</>
	);
};

export default BoxPost;
