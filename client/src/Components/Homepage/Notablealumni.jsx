import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import {
	Card,
	CardColumns,
	CardGroup,
	Row,
	Col,
	CardDeck,
} from 'react-bootstrap';
import AccountBoxTwoToneIcon from '@material-ui/icons/AccountBoxTwoTone';

const Notablealumni = () => {
	const [featured, setFeatured] = useState([]);
	useEffect(() => {
		Axios.get('http://localhost:3001/featured').then((response) => {
			setFeatured(response.data);
			console.log(response.data);
		});
	}, []);

	return (
		<>
			<Card
				style={{
					height: 'auto ',
					marginLeft: '180px ',
					width: 'auto',
					borderColor: '#202020',
				}}>
				<Card.Header
					style={{
						display: 'flex',
						flexDirection: 'Row',
						fontSize: '28px',
						backgroundColor: 'orange',
					}}>
					<AccountBoxTwoToneIcon
						alt='User Name'
						style={{ marginRight: '8px', height: '45px', width: '45px' }}
					/>
					<b>Featured Alumni</b>
				</Card.Header>
				{featured.map((value, key) => {
					return (
						<CardDeck
							key={value.alumni_id}
							style={{
								marginTop: '20px',
								marginRight: '1px',
								marginLeft: '1px',
							}}>
							<Card style={{ width: '20rem', borderColor: '#202020' }}>
								<Row style={{ borderRadius: '50%' }}>
									<Col>
										<img
											src={value.profile_link}
											style={{
												borderRadius: '50%',
												width: '100px',
												height: '100px',
												margin: '14px',
											}}
										/>
									</Col>
									<Col>
										<Card.Body>
											<Card.Title>{value.alumni_name}</Card.Title>
											<Card.Text>{value.passout_year}</Card.Text>
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
