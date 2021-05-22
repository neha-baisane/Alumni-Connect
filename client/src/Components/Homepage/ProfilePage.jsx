import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Card,
	Button,
	Row,
	Col,
	Container,
	Tab,
	Sonnet,
	Alert,
} from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import { Image } from 'cloudinary-react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProfilePage() {
	let { id } = useParams();
	const [profile, setProfile] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	useEffect(() => {
		axios.get(`http://localhost:3001/profile/byId/${id}`).then((response) => {
			if (response.data.message) {
				setErrorMessage(response.data.message);
			} else setProfile(response.data);
		});
	});
	return (
		<div>
			{errorMessage ? <Alert variant='danger'>{errorMessage}</Alert> : null}
			{profile.map((value, key) => {
				return (
					<>
						<Card
							key={value.alumni_id}
							style={{
								width: '50rem',
								height: '15rem',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								marginLeft: '200px',
							}}>
							<Container>
								<Row>
									<Col className='block-example  border-dark' sm={3}>
										<Image
											style={{
												width: '10rem',
												height: '200px',
												alignSelf: 'center',
												marginLeft: '20px',
												borderRadius: '50%',
											}}
											cloudName='sakshi-mini-project'
											publicId={value.profile_link}
										/>
									</Col>
									<Col>
										<Card.Body>
											<Card.Title
												style={{
													fontSize: '40px',
												}}>
												{value.alumni_name}
											</Card.Title>

											<Card.Text style={{ fontSize: '20px' }}>
												<b>Email</b> :{value.email}
											</Card.Text>

											<Card.Text style={{ fontSize: '20px' }}>
												<b>Location </b>: {value.location}
											</Card.Text>
										</Card.Body>
									</Col>
								</Row>
							</Container>
						</Card>
						<br />
						<Card
							border='secondary'
							style={{
								width: '50rem',
								height: '10rem',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'left',
								marginLeft: '200px',
								backgroundColor: '#006666',
								marginTop: 'auto',
							}}>
							<Card.Body style={{ color: 'white', textSizeAdjust: '20px' }}>
								<Card.Title
									style={{
										fontSize: '30px',
									}}>
									Bio
								</Card.Title>

								<Card.Text style={{ fontSize: '20px' }}>{value.bio}</Card.Text>
							</Card.Body>
						</Card>
						<br />
						<Card
							border='secondary'
							style={{
								width: '50rem',
								height: '30rem',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'left',
								marginLeft: '200px',
								backgroundColor: '	 #003333',
								marginTop: 'auto',
							}}>
							<Card.Body style={{ color: 'white', textSizeAdjust: '20px' }}>
								<Card.Text style={{ fontSize: '20px' }}>
									<b>Skills</b> : {value.skills}
								</Card.Text>
								<Card.Text style={{ fontSize: '20px' }}>
									<b>Education</b> : {value.education}
								</Card.Text>
								<Card.Text style={{ fontSize: '20px' }}>
									<b>Current Job </b>: {value.current_job}
								</Card.Text>
								<br />
								<Card.Title
									style={{
										fontSize: '30px',
									}}>
									Experience
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
