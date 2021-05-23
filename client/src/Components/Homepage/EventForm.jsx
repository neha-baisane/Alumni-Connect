import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import { Form, Button, Card, Col, Row } from 'react-bootstrap';
import EventIcon from '@material-ui/icons/Event';

const EventForm = () => {
	const [event_name, setEventName] = useState('');
	const [venue, setVenue] = useState('');
	const [time, setTime] = useState(null);
	const [day, setDay] = useState(null);
	const addEvent = () => {
		Axios.post('http://localhost:3001/addevent', {
			event_name: event_name,
			venue: venue,
			time: time,
			day: day,
		})
			.then((response) => response.json())
			.then((response) => {
				console.log(response.data);
			});
	};
	return (
		<>
			<Card border='primary'>
				<Card.Header
					style={{
						display: 'flex',
						flexDirection: 'row',
						width: '100%',
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
					Schedule an Event
				</Card.Header>
				<Card.Title style={{ margin: '8px' }}>
					Fill the details to schedule an event
				</Card.Title>
				<Card.Body>
					<Row>
						<Col Style={{ marginLeft: '2px', height: '20rem', width: '50rem' }}>
							<img
								src='https://image.freepik.com/free-vector/appointment-booking-with-calendar-person_23-2148576382.jpg'
								style={{ height: '200px', width: '200px', marginLeft: '90px' }}
								alt=''
							/>
						</Col>
						<Col Style={{ marginLeft: '2px', height: '20rem', width: '50rem' }}>
							<Form>
								<Form.Group controlId='exampleForm.ControlTextarea1'>
									<Form.Label>Enter event name</Form.Label>
									<Form.Control
										as='textarea'
										rows={1}
										required
										onChange={(e) => {
											setEventName(e.target.value);
										}}
									/>
								</Form.Group>
								<Form.Group controlId='exampleForm.ControlTextarea1'>
									<Form.Label>Venue of event</Form.Label>
									<Form.Control
										as='textarea'
										rows={1}
										required
										onChange={(e) => {
											setVenue(e.target.value);
										}}
									/>
								</Form.Group>
								<Form.Group>
									<Row>
										<Col>
											<label for='birthday'>Event Date</label>
											<input
												type='date'
												id='date'
												name='date'
												// defaultValue='YY-MM-DD'
												required
												onChange={(e) => {
													setDay(e.target.value);
												}}></input>
										</Col>
										<Col>
											<label for='appt'>Event Time</label>
											<br />
											<input
												type='time'
												id='appt'
												name='appt'
												defaultValue='HH:MM:SS'
												required
												onChange={(e) => {
													setTime(e.target.value);
												}}></input>
										</Col>
										<Button
											type='submit'
											style={{
												marginTop: '15px',
												display: 'flex',
												flexDirection: 'center',
												marginLeft: '160px',
											}}
											onClick={addEvent}>
											Add Event
										</Button>
									</Row>
								</Form.Group>
							</Form>
						</Col>
					</Row>
				</Card.Body>
			</Card>
			<br />
		</>
	);
};

export default EventForm;
