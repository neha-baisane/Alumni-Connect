import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Card,
	Button,
	Row,
	Col,
	Container,
	Image,
	Tab,
	Sonnet,
} from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';

const ProfilePage = () => {
	return (
		<>
			<Card
				border='secondary'
				style={{
					width: '70rem',
					height: '15rem',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginLeft: '200px',
					backgroundColor: '#008080',
				}}>
				<Container>
					<Row>
						<Col className='block-example border-right border-dark' sm={3}>
							<Image
								style={{
									width: '200px',
									height: '200px',
									alignSelf: 'center',
									marginLeft: '20px',
								}}
								src='https://expertphotography.com/wp-content/uploads/2018/10/cool-profile-pictures-retouching-1.jpg'
								roundedCircle
							/>
						</Col>
						<Col>
							<Card.Body style={{ color: 'white' }}>
								<Card.Title
									style={{
										fontSize: '40px',
									}}>
									Daya Jethalal Gada
								</Card.Title>

								<Card.Text style={{ fontSize: '20px' }}>
									<b>Email</b> : gadadaya01@gmail.com
								</Card.Text>

								<Card.Text style={{ fontSize: '20px' }}>
									<b>Location </b>: Banglore, India
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
					width: '70rem',
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
					<Card.Text style={{ fontSize: '20px' }}> I am Daya. </Card.Text>
					<Card.Text style={{ fontSize: '20px' }}>
						I am here to guide my fellow juniors in their carrer . Reach out to
						me without any hesitation.
					</Card.Text>
				</Card.Body>
			</Card>
			<br />
			<Card
				border='secondary'
				style={{
					width: '70rem',
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
						<b>Skills</b> : ReactJS, NodeJs, MYSQL
					</Card.Text>
					<Card.Text style={{ fontSize: '20px' }}>
						<b>Education</b> : MTech in CSE, BTech in CSE
					</Card.Text>
					<Card.Text style={{ fontSize: '20px' }}>
						<b>Current Job </b>: Web Developer at Google
					</Card.Text>
					<br />
					<Card.Title
						style={{
							fontSize: '30px',
						}}>
						Experience
					</Card.Title>
					<Card.Subtitle>I have no experience :(</Card.Subtitle>
				</Card.Body>
			</Card>
			<br />
		</>
	);
};

export default ProfilePage;
