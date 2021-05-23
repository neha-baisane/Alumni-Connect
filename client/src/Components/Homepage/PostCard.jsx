import React, { useState, useEffect } from 'react';
import { Card, Button, InputGroup, FormControl, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Avatar from '@material-ui/core/Avatar';
import AddCommentIcon from '@material-ui/icons/AddComment';
import BoxPost from './BoxPost';
import { Image } from 'cloudinary-react';
import axios from 'axios';
//import { useParams } from 'react-router-dom';

function PostCard() {
	const [showComment, setShowComment] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const [uploads, setUploads] = useState([]);

	var postId = null;
	//const [postId, setPostId] = useState(null);
	const email = localStorage.getItem('email');
	const [text, setText] = useState('');

	const [comments, setComments] = useState([]);

	const postComment = () => {
		axios
			.post('http://localhost:3001/comment', {
				postId: postId,
				email: email,
				text: text,
			})
			.then((response) => {
				console.log(response);
				setComments([
					...comments,
					{ postId: postId, email: email, text: text },
				]);
			});
	};

	const showComments = () => {
		setShowComment(!showComment);
	};

	useEffect(() => {
		axios.get('http://localhost:3001/feed').then((response) => {
			if (response.data.message) {
				setErrorMessage(response.data.message);
			} else {
				setUploads(response.data);
			}
		});
		axios.get('http://localhost:3001/comment').then((response) => {
			if (response.data.message) {
				setErrorMessage(response.data.message);
			} else {
				setComments(response.data);
				console.log(response.data);
			}
		});
		// axios.get(`http://localhost:3001/comment/${postId}`).then((response) => {
		// 	if (response.data.message) {
		// 		setErrorMessage(response.data.message);
		// 	} else {
		// 		setComments(response.data);
		// 		console.log(response.data);
		// 	}
		// });
	});

	return (
		<div>
			<BoxPost />
			{errorMessage ? <Alert variant='danger'>{errorMessage}</Alert> : null}

			{uploads.map((value, key) => {
				postId = value.post_id;
				return (
					<div>
						<Card
							border='light'
							style={{
								width: '38rem',
								marginLeft: '10%',
							}}
							key={key}>
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
									<Button variant='light' onClick={showComments}>
										<AddCommentIcon
											style={{ marginRight: '8px', colour: 'grey' }}
										/>
										Comments
									</Button>
								</Card.Text>
								{showComment && (
									<>
										{comments.map((v, k) => {
											return postId == v.post_id ? (
												<Card
													body
													key={k}
													className='h-auto d-inline-block w-100'>
													{v.email} : {v.text}
												</Card>
											) : null;
										})}
										<InputGroup className='mb-3'>
											<FormControl
												placeholder="What's in your mind?"
												aria-label="What's in your mind?"
												aria-describedby='basic-addon2'
												onChange={(event) => {
													setText(event.target.value);
												}}
											/>
											<InputGroup.Append>
												<Button variant='success' onClick={postComment}>
													Post
												</Button>
											</InputGroup.Append>
										</InputGroup>
									</>
								)}
							</Card.Body>
						</Card>
					</div>
				);
			})}
		</div>
	);
}

export default PostCard;
