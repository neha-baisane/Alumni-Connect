import React, { useState, useEffect, useReducer } from 'react';
import {
	Navbar,
	Button,
	DropdownButton,
	Col,
	Modal,
	Tooltip,
	OverlayTrigger,
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterProfile from './RegisterProfile';

const NavBar = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const handleLogOut = () => {
		localStorage.clear();
		window.location.replace('/');
	};

	let history = useHistory();
	return (
		<Navbar
			bg='dark'
			variant='dark'
			style={{
				height: '80px',
				marginBottom: '20px',
				display: 'flex',
				width: '100%',
			}}>
			<Navbar.Brand href='#home'>Alumni Connect</Navbar.Brand>
			<Navbar.Collapse className='justify-content-end'>
				<Navbar.Text>
					{localStorage.getItem('email')}{' '}
					<Button
						variant='outline-info'
						onClick={handleLogOut}
						style={{
							marginLeft: '10px',
						}}>
						Log Out
					</Button>
				</Navbar.Text>
			</Navbar.Collapse>
			<DropdownButton
				variant='outline-info'
				title='Complete Profile'
				style={{ marginLeft: '10px' }}>
				<Col>
					<Button
						onClick={handleShow}
						variant='light'
						style={{
							height: '30px',
							width: '90px',
							marginTop: '0px',
							marginLeft: '25px',
							backgroundColor: 'white',
						}}>
						Alumni
					</Button>
					<Modal scrollable={true} size='xl' show={show} onHide={handleClose}>
						<Modal.Header closeButton></Modal.Header>
						<Modal.Body>
							<RegisterProfile />
						</Modal.Body>
					</Modal>
				</Col>

				<Col>
					<OverlayTrigger
						overlay={
							<Tooltip id='tooltip-disabled'>Students are not allowed!</Tooltip>
						}>
						<span className='d-inline-block'>
							<Button
								variant='light'
								disabled
								style={{
									pointerEvents: 'none',
									height: '30px',
									width: '90px',
									marginTop: '2px',
									marginLeft: '25px',
									backgroundColor: 'white',
								}}>
								Student
							</Button>
						</span>
					</OverlayTrigger>
				</Col>
			</DropdownButton>
		</Navbar>
	);
};

export default NavBar;
