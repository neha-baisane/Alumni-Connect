import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { Card, Row, Col, CardDeck, Alert } from 'react-bootstrap';
import AccountBoxTwoToneIcon from '@material-ui/icons/AccountBoxTwoTone';
import { Image } from 'cloudinary-react';
import { useHistory } from 'react-router-dom';

const Notablealumni = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const [featured, setFeatured] = useState([]);
	useEffect(() => {
		Axios.get('http://localhost:3001/featured').then((response) => {
			if (response.data.message) {
				setErrorMessage(response.data.message);
			} else setFeatured(response.data);
		});
	}, []);
	const history = useHistory();
	return (
		<>
			<Card
				border='light'
				style={{
					height: 'auto',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'left',
					marginLeft: '15%',
					width: '38rem',
				}}>
				<Card.Header
					style={{
						display: 'flex',
						flexDirection: 'row',
						width: '100%',
						fontSize: '22px',
						color: '#3e4444',
						marginTop: '15px',
					}}>
					<img
						src='https://img.icons8.com/clouds/2x/graduation-cap.png'
						class='rounded-circle'
						style={{ height: '2rem', width: '2rem' }}
					/>{' '}
					Featured Alumni
				</Card.Header>
				<Card.Body>
					{errorMessage ? <Alert variant='danger'>{errorMessage}</Alert> : null}
				</Card.Body>

				{featured.map((value, key) => {
					return (
						<CardDeck
							onClick={() => {
								history.push(`/profile/${value.alumni_id}`);
							}}
							key={value.alumni_id}
							style={{
								marginTop: '10px',
								marginRight: '1px',
								marginLeft: '1px',
							}}>
							<Card border='info' className='shadow' style={{ width: '20rem' }}>
								<Row style={{ borderRadius: '50%' }}>
									<Col>
										{/* <img
											src={value.profile_link}
											style={{
												borderRadius: '50%',
												width: '100px',
												height: '100px',
												margin: '14px',
											}}
										/> */}
										<Image
											style={{
												borderRadius: '50%',
												width: '130px',
												height: '130px',
												marginTop: '13px',
											}}
											cloudName='sakshi-mini-project'
											publicId={value.profile_link}
										/>
									</Col>

									<Col sm={1}>
										<hr
											style={{
												color: ' #000000',
												backgroundColor: '#219EB2',
												height: '120px',
												width: '0.1rem',
												marginLeft: '5px',
											}}
										/>
									</Col>
									<Col>
										<Card.Body>
											<Card.Title>{value.alumni_name}</Card.Title>
											<Card.Text className='font-italic'>
												Class of {value.passout_year}
											</Card.Text>
											<Card.Text>{value.current_job}</Card.Text>
										</Card.Body>
									</Col>
								</Row>
							</Card>
						</CardDeck>
					);
				})}

				<br></br>
			</Card>
		</>
	);
};

export default Notablealumni;
