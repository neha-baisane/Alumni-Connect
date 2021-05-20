import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Modal, Button } from 'react-bootstrap';
import EventIcon from '@material-ui/icons/Event';
import EventForm from './EventForm';

const Events = () => {
	const [addEvent, setAddEvent] = useState(false);
	const [events, setEvents] = useState([]);
	const handleShow = () => setAddEvent(true);
	const handleClose = () => setAddEvent(false);

	useEffect(() => {
		axios.get('http://localhost:3001/event').then((response) => {
			setEvents(response.data);
		});
	}, []);

	return (
		<>
			<Card
				border='danger'
				style={{
					width: '28rem',
					height: 'auto',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'left',
					marginLeft: '200px',
				}}>
				<Card.Header
					style={{
						display: 'flex',
						flexDirection: 'row',
						width: '100%',
						backgroundColor: 'orange',
						fontSize: '25px',
					}}>
					<EventIcon
						alt='User Name'
						style={{
							marginRight: '8px',
							height: '45px',
							width: '45px',
						}}
					/>
					Events
					<Button
						variant='light'
						onClick={handleShow}
						style={{ marginLeft: '150px' }}>
						Add Event
					</Button>
				</Card.Header>
				<Card.Body>
					{events.map((value, key) => {
						return (
							<>
								<Card
									key={value.event_id}
									border='danger'
									style={{
										width: '25rem',
										height: '8rem',
										display: 'flex',
										alignItems: 'left',
										marginTop: 'auto',
										backgroundColor: '',
										alignItems: 'left',
									}}>
									<Row>
										<Col sm={4}>
											<Card.Body style={{ color: 'black' }}>
												<Card.Text
													style={{ fontSize: '16px', color: '#737373' }}>
													<b>{value.time}</b>
												</Card.Text>
												<Card.Text
													style={{
														fontSize: '17px',
														color: '#ff661a',
													}}>
													<b>{value.day}</b>
												</Card.Text>
											</Card.Body>
										</Col>

										<Col sm={1}>
											<hr
												style={{
													color: ' #000000',
													backgroundColor: '#ff661a',
													height: '100px',
													width: '1px',
												}}
											/>
										</Col>

										<Col>
											<Card.Body style={{ color: 'black' }}>
												<Card.Text
													style={{ fontSize: '22px', color: '#ff661a' }}>
													<b>{value.event_name}</b>
												</Card.Text>
												<Card.Subtitle
													style={{
														fontSize: '20px',
														color: 'black',
														float: 'center',
													}}>
													{value.venue}
													<br></br>
													{/* <Button
														variant='info'
														size='lg'
														style={{
															marginTop: '2px',
															marginLeft: '55px',
															height: '24px',
															width: '65px',
															display: 'flex',
															fontSize: '12px',
															justifyContent: 'center',
															alignSelf: 'stretch',
														}}>
														{value.status}
													</Button> */}
												</Card.Subtitle>

												<br />
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
						width: '997px',
						height: '800px',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						marginLeft: '350px',
					}}>
					<Modal.Body>{addEvent && <EventForm />}</Modal.Body>
				</Modal>
			</div>
		</>
	);
};

export default Events;
