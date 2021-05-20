import React from 'react';
import { Nav, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import EventIcon from '@material-ui/icons/Event';
import SupervisedUserCircleSharpIcon from '@material-ui/icons/SupervisedUserCircleSharp';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

function SideCol(props) {
	return (
		// <Nav
		// 	defaultActiveKey='/home'
		// 	classNameName='flex-column'
		// 	style={{ display: 'flex' }}>
		// 	<Card style={{ width: '22rem' }}>
		// 		<ListGroup variant='flush'>
		// 			<ListGroup.Item style={{ cursor: 'pointer' }}>
		// 				<Link to='/feed'>
		// 					<HomeWorkIcon />
		// 					<h6>Feed</h6>
		// 				</Link>
		// 			</ListGroup.Item>
		// 			<ListGroup.Item style={{ cursor: 'pointer' }}>
		// 				<Link to='/events'>
		// 					<EventIcon />
		// 					<h6>Events</h6>
		// 				</Link>
		// 			</ListGroup.Item>
		// 			<ListGroup.Item style={{ cursor: 'pointer' }}>
		// 				<Link to='/featured'>
		// 					<SupervisedUserCircleSharpIcon />
		// 					<h6>Featured Alumni</h6>
		// 				</Link>
		// 			</ListGroup.Item>
		// 			<ListGroup.Item style={{ cursor: 'pointer' }}>
		// 				<Link to='/gallery'>
		// 					<PhotoLibraryIcon />
		// 					<h6>Gallery</h6>
		// 				</Link>
		// 			</ListGroup.Item>
		// 		</ListGroup>
		// 	</Card>
		// </Nav>

		<Nav defaultActiveKey='/home' className='flex-column'>
			<Link to='/feed'>
				<HomeWorkIcon />
				<h6>Feed</h6>
			</Link>
			<Link to='/events'>
				<EventIcon />
				<h6>Events</h6>
			</Link>
			<Link to='/featured'>
				<SupervisedUserCircleSharpIcon />
				<h6>Featured Alumni</h6>
			</Link>
			<Link to='/gallery'>
				<PhotoLibraryIcon />
				<h6>Gallery</h6>
			</Link>
		</Nav>
	);
}

export default SideCol;
