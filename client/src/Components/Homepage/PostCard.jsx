import React, { useState, useEffect } from 'react';
import { Card, Button, InputGroup, FormControl, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from '@material-ui/core/Avatar';
import AddCommentIcon from '@material-ui/icons/AddComment';
import BoxPost from './BoxPost';
import { Image } from 'cloudinary-react';
import axios from 'axios';

function PostCard() {
	const [showComment, setShowComment] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [uploads, setUploads] = useState([]);
	const email = localStorage.getItem('email');

	useEffect(() => {
		axios.get('http://localhost:3001/feed').then((response) => {
			if (response.data.message) {
				setErrorMessage(response.data.message);
			} else setUploads(response.data);
		});
	}, []);

	return (
		<>
			<BoxPost />
			{errorMessage ? <Alert variant='danger'>{errorMessage}</Alert> : null}
			{uploads.map((value, key) => {
				return (
					<div>
						<Card
							border='light'
							style={{ width: '38rem', marginLeft: '10%' }}
							key={value.post_id}>
							<Card.Header style={{ display: 'flex', flexDirection: 'row' }}>
								{/* <Avatar
									alt={value.user_name}
									style={{ marginRight: '8px' }}
									src='/static/images/avatar/1.jpg'
								/> */}
								<Card.Title style={{ marginTop: '8px' }}>
									{value.user_name}
								</Card.Title>
							</Card.Header>

							<Image
								cloudName='sakshi-mini-project'
								publicId={value.img_name}
							/>

							<Card.Body className='text-left'>
								<Card.Text>{value.description}</Card.Text>
								<Card.Text className='mb-2 text-muted'>
									<Button
										variant='light'
										onClick={() => setShowComment(!showComment)}>
										<AddCommentIcon
											style={{ marginRight: '8px', colour: 'grey' }}
										/>
										Add Comment
									</Button>
								</Card.Text>
								{showComment && (
									<InputGroup className='mb-3'>
										<FormControl
											placeholder="What's in your mind?"
											aria-label="What's in your mind?"
											aria-describedby='basic-addon2'
										/>
										<InputGroup.Append>
											<Button variant='success'>Post</Button>
										</InputGroup.Append>
									</InputGroup>
								)}
							</Card.Body>
						</Card>
					</div>
				);
			})}
		</>
	);
}

export default PostCard;
