import React, { useState } from 'react';
import {
	Navbar,
	Button,
	DropdownButton,
	Col,
	Modal,
	Tooltip,
	OverlayTrigger,
} from 'react-bootstrap';
//import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterProfile from './RegisterProfile';
import { Link } from 'react-router-dom';
import logo2 from './logo2.png';

const NavBar = () => {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const status = localStorage.getItem('status');
	const handleLogOut = () => {
		localStorage.clear();
		window.location.replace('/');
	};

	//let history = useHistory();
	return (
		<Navbar
			bg='dark'
			variant='dark'
			style={{
				height: '80px',
				marginBottom: '20px',
				display: 'flex',
				width: '100%',
			}}
			className='shadow p-3 mb-5'>
			<Navbar.Brand href='/feed'>
				{' '}
				<img
					src={logo2}
					alt='loading...'
					style={{
						float: 'left',
						height: '150px',
						width: '170px',
						marginTop: '40px',
					}}
				/>
			</Navbar.Brand>
			<Navbar.Collapse className='justify-content-end'>
				<Navbar.Text>
					{localStorage.getItem('email')}{' '}
					<Button
						className='btn-sm'
						variant='info'
						onClick={handleLogOut}
						style={{
							marginLeft: '10px',
						}}>
						Log Out
					</Button>
				</Navbar.Text>
			</Navbar.Collapse>
			{status == 'alumni' && (
				<Button
					className='btn-sm'
					onClick={handleShow}
					variant='info'
					style={{
						marginLeft: '10px',
					}}>
					Complete Profile
				</Button>
			)}

			<Modal scrollable={true} size='xl' show={show} onHide={handleClose}>
				<Modal.Header closeButton></Modal.Header>

				<Modal.Body>
					<RegisterProfile />
				</Modal.Body>
			</Modal>
		</Navbar>
	);
};

export default NavBar;
