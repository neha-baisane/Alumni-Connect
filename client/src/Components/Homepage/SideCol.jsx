import React from 'react';
import { Nav, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'mdbreact';
import './SideCol.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import EventIcon from '@material-ui/icons/Event';
import SupervisedUserCircleSharpIcon from '@material-ui/icons/SupervisedUserCircleSharp';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import giphy from './giphy.gif';

function SideCol() {
	return (
		<Nav
			defaultActiveKey='/home'
			className='flex-column border-left-0 '
			style={{ width: '15rem' }}>
			<Card
				className='border-right-0 border-left-0 border-top-0 links'
				style={{
					margin: '10px',
					marginLeft: '6px',
					textAlign: 'center',
					alignItems: 'center',
					justifyContent: 'center',
					height: '45px',
				}}>
				<Link to='/feed' style={{ textDecoration: 'none' }}>
					<h5 style={{ color: ' #219EB2' }}>
						<img
							src='https://img.icons8.com/cute-clipart/2x/home.png'
							class='rounded-circle'
							style={{ height: '2rem', width: '2rem' }}
						/>{' '}
						Feed
					</h5>
				</Link>
			</Card>
			<Card
				className='border-right-0 border-left-0 border-top-0 links'
				style={{
					margin: '10px',
					marginLeft: '6px',
					textAlign: 'center',
					alignItems: 'center',

					justifyContent: 'center',
					height: '45px',
				}}>
				<Link to='/events' style={{ textDecoration: 'none' }}>
					<h5 style={{ color: ' #219EB2' }}>
						<img
							src='https://img.icons8.com/cute-clipart/2x/planner.png'
							class='rounded-circle'
							style={{ height: '2rem', width: '2rem' }}
						/>{' '}
						Events
					</h5>
				</Link>
			</Card>
			<Card
				className='border-right-0 border-left-0 border-top-0 links'
				style={{
					margin: '10px',
					marginLeft: '6px',
					textAlign: 'center',
					alignItems: 'center',

					justifyContent: 'center',
					height: '45px',
				}}>
				<Link to='/featured' style={{ textDecoration: 'none' }}>
					<h5 style={{ color: ' #219EB2' }}>
						<img
							src='https://img.icons8.com/bubbles/2x/student-male.png'
							class='rounded-circle'
							style={{ height: '3rem', width: '3rem' }}
						/>{' '}
						Alumni
					</h5>
				</Link>
			</Card>
			<Card
				className='border-right-0 border-left-0 border-top-0 links'
				style={{
					margin: '10px',
					marginLeft: '6px',
					textAlign: 'center',
					alignItems: 'center',

					justifyContent: 'center',
					height: '45px',
				}}>
				<Link to='/gallery' style={{ textDecoration: 'none' }}>
					<h5 style={{ color: ' #219EB2' }}>
						<img
							src='https://img.icons8.com/cute-clipart/2x/stack-of-photos.png'
							class='rounded-circle'
							style={{ height: '2rem', width: '2rem' }}
						/>{' '}
						Gallery
					</h5>
				</Link>
			</Card>
			<img
				src={giphy}
				alt='loading...'
				style={{
					float: 'left',

					height: '200px',

					width: '200px',
					margin: '10px',
					marginLeft: '6px',
				}}
			/>
		</Nav>
	);
}

export default SideCol;
