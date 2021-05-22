import './App.css';
import { Route, Switch } from 'react-router-dom';
import PostCard from './Components/Homepage/PostCard';
import NavBar from './Components/Homepage/NavBar';
import SideCol from './Components/Homepage/SideCol';
import Events from './Components/Homepage/Events';
import ProfilePage from './Components/Homepage/ProfilePage';
import Notablealumni from './Components/Homepage/Notablealumni';
import LoginContainer from './Components/Loginpage/LoginContainer';
import Gallery from './Components/Homepage/Gallery';
import { Container, Col, Row } from 'react-bootstrap';
import React from 'react';
import { useHistory } from 'react-router-dom';

function App() {
	const history = useHistory();
	{
		localStorage.getItem('loggedIn')
			? history.push('/feed')
			: history.push('/');
	}

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
									<Route path='/events' component={Events}></Route>
									<Route path='/profile/:id' exact component={ProfilePage} />
									<Route path='/featured' component={Notablealumni} />

									<Route path='/gallery' component={Gallery} />
									{/* <Route path='/profile' component={ProfilePage} /> */}
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
