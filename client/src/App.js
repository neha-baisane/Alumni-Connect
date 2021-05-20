import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import PostCard from './Components/Homepage/PostCard';
import NavBar from './Components/Homepage/NavBar';
import SideCol from './Components/Homepage/SideCol';
import Events from './Components/Homepage/Events';
import Notablealumni from './Components/Homepage/Notablealumni';
import LoginContainer from './Components/Loginpage/LoginContainer';
import Gallery from './Components/Homepage/Gallery';
import { Container, Col, Row } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function App() {
	const history = useHistory();
	{
		localStorage.getItem('loggedIn')
			? history.push('/feed')
			: history.push('/');
	}
	// window.addEventListener('onunload', () => localStorage.clear());

	return (
		<div className='App'>
			{localStorage.getItem('loggedIn') ? (
				<>
					<NavBar />
					<Container>
						<Row>
							<Col sm={2}>
								<SideCol />
							</Col>
							<Col>
								<Switch>
									<Route path='/feed' component={PostCard} />
									<Route path='/events' component={Events} />
									<Route path='/featured' component={Notablealumni} />
									<Route path='/gallery' component={Gallery} />
								</Switch>
							</Col>
						</Row>
					</Container>
				</>
			) : (
				<Route path='/' exact component={LoginContainer} />
			)}
		</div>
	);
}

export default App;
