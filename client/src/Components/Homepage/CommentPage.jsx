import React, { useState, useEffect } from 'react';
import { Card, Button, InputGroup, FormControl, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image } from 'cloudinary-react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function CommentPage() {
	let { id } = useParams();
	var postId = null;
	const email = localStorage.getItem('email');

	const [data, setData] = useState([]);
	const [comments, setComments] = useState([]);
	const [text, setText] = useState('');

	useEffect(() => {
		(async () => {
			const data1 = await axios.get(`http://localhost:3001/post/byId/${id}`);
			const data2 = await axios.get(`http://localhost:3001/comment/${id}`);
			setData(data1.data, data2.data);
			setComments(data2.data);
		})();
	}, []);

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

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				marginLeft: '10%',
			}}>
			{data.map((value, key) => {
				postId = value.post_id;
				return (
					<>
						<Card
							className='shadow'
							style={{
								width: '32rem',
								cursor: 'pointer',
							}}
							key={key}>
							<Card.Header style={{ display: 'flex', flexDirection: 'row' }}>
								<Card.Title style={{ marginTop: '8px' }}>
									{value.user_name}
								</Card.Title>
							</Card.Header>

							<Image
								cloudName='sakshi-mini-project'
								publicId={value.img_name}
							/>
							{/* <h1>Image goes here</h1> */}

							<Card.Body className='text-left'>
								<Card.Text>
									<b>{value.user_name}</b> : {value.description}
								</Card.Text>
							</Card.Body>
						</Card>

						<div
							style={{
								width: '22rem',
								border: 'dark',
								marginLeft: '8px',
							}}>
							<Card.Title style={{ marginTop: '2px' }}>Add Comment</Card.Title>
							<InputGroup className='mb-3'>
								<FormControl
									placeholder="What's in your mind?"
									aria-label="What's in your mind?"
									aria-describedby='basic-addon2'
									onChange={(event) => {
										setText(event.target.value);
									}}
								/>
								<InputGroup.Append className='shadow-sm'>
									<Button variant='success' onClick={postComment}>
										Post
									</Button>
								</InputGroup.Append>
							</InputGroup>
							<Card.Title style={{ marginTop: '8px' }}>Comments</Card.Title>
							{comments.length > 0 ? (
								comments.map((v, k) => {
									return (
										<Card>
											<Card.Body className='shadow-sm d-inline-block w-100 text-left'>
												<b>{v.email}</b> : {v.text}
											</Card.Body>
										</Card>
									);
								})
							) : (
								<Alert variant='info'> No comments</Alert>
							)}
						</div>
					</>
				);
			})}
		</div>
	);
}

export default CommentPage;
