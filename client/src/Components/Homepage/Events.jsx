import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Modal, Button, Alert } from 'react-bootstrap';
import EventIcon from '@material-ui/icons/Event';
import EventForm from './EventForm';

var user_id = localStorage.getItem('email');

const Events = () => {
	const [addEvent, setAddEvent] = useState(false);
	const [events, setEvents] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	const [data, setData] = useState('');

	const handleShow = () => setAddEvent(true);
	const handleClose = () => setAddEvent(false);

	const deleteEvent = (event_id) => {
		axios
			.delete(`http://localhost:3001/delete/${event_id}`)
			.then((response) => {
				setEvents(
					events.filter((value) => {
						return value.event_id !== event_id;
					})
				);
			});
	};

	useEffect(() => {
		axios.get('http://localhost:3001/event').then((response) => {
			if (response.data.message) {
				//console.log(response.data.message);
				setErrorMessage(response.data.message);
			} else {
				//console.log(response.data);
				setEvents(response.data);
			}
		});
	}, []);

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
						src='https://img.icons8.com/dusk/2x/event-accepted.png'
						class='rounded-circle'
						style={{ height: '2rem', width: '2rem', marginRight: '3px' }}
					/>
					{'  '}
					Events
					<Button
						variant='info'
						className='btn-sm'
						onClick={handleShow}
						style={{
							marginLeft: '60%',
							height: '2rem',
							width: '6rem',
							marginTop: '5px',
						}}>
						Add Event
					</Button>
				</Card.Header>
				<Card.Body
					style={{
						padding: '0.4rem',
						marginTop: '4px',
					}}>
					{errorMessage ? <Alert variant='danger'>{errorMessage}</Alert> : null}
					{events.map((value, key) => {
						return (
							<>
								<Card
									className='shadow'
									key={value.event_id}
									border='info'
									style={{
										width: 'auto',
										height: 'auto',
										display: 'flex',
										alignItems: 'left',
										// marginTop: 'auto',
										backgroundColor: '',
									}}>
									<Row>
										<Col sm={4}>
											<Card.Body
												style={{
													padding: '0.1rem',
													height: 'auto',
													width: '10rem',
													marginTop: '1.5rem',
												}}>
												<Card.Text
													style={{ fontSize: '17px', color: '#737373' }}>
													<b>{value.time}</b>
												</Card.Text>
												<Card.Text
													style={{
														fontSize: '20px',
														color: '#219EB2',
													}}>
													<b>{value.day}</b>
												</Card.Text>
												<Card.Text
													style={{
														fontSize: '20px',
														color: '#219EB2',
													}}>
													{value.event_link ? (
														<Card.Link
															href={value.event_link}
															style={{ color: '#219EB2' }}>
															Event Link
														</Card.Link>
													) : null}
												</Card.Text>
											</Card.Body>
										</Col>

										<Col sm={1}>
											<hr
												style={{
													color: ' #000000',
													backgroundColor: '#219EB2',
													height: '120px',
													width: '0.1rem',
												}}
											/>
										</Col>

										<Col sm={7} style={{ padding: '0.1rem' }}>
											<Card.Body style={{ color: '#737373', fontSize: '15px' }}>
												<b>{value.event_name}</b>
												<br />
												<b> {value.venue}</b>
												<br></br>
												<br></br>
												<b>Organizer : {value.user_id}</b>

												{value.user_id === user_id ? (
													<Button
														onClick={() => {
															deleteEvent(value.event_id);
														}}
														variant='danger'
														size='lg'
														style={{
															marginTop: '10px',
															marginLeft: '140px',
															height: '26px',
															width: '50px',
															display: 'flex',
															fontSize: '12px',
															alignItems: 'center',
															justifyContent: 'center',
														}}>
														Delete
													</Button>
												) : null}
											</Card.Body>
										</Col>
									</Row>
								</Card>
								<br></br>
							</>
						);
					})}
				</Card.Body>
			</Card>
			<br />
			<div>
				<Modal
					show={addEvent}
					onHide={handleClose}
					style={{
						width: '70rem',
						height: '650px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						marginLeft: '150px',
					}}>
					<Modal.Body>{addEvent && <EventForm />}</Modal.Body>
				</Modal>
			</div>
		</>
	);
};

export default Events;
