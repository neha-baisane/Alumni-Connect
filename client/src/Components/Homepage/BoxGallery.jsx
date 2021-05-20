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
						console.log('database done');
						history.push('/gallery');
					});
			});
	};
	return (
		<>
			<Accordion>
				<Card
					style={{
						display: 'flex',
						marginLeft: '10%',
						width: '34rem',
						height: 'auto',
						cursor: 'pointer',
					}}>
					<Card.Header
						style={{
							display: 'flex',
							flexDirection: 'row',
							width: '100%',
							backgroundColor: '#f0f3f7',
							fontSize: '15px',
						}}>
						<Accordion.Toggle
							as={Card.Header}
							variant='link'
							eventKey='0'
							style={{ height: 'auto', width: '38rem' }}>
							<PostAddIcon
								alt='User Name'
								style={{
									marginRight: '8px',
									height: '35px',
									width: '35px',
									color: 'black',
								}}
							/>
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
			</Accordion>
			<br />
		</>
	);
};

export default BoxPost;
