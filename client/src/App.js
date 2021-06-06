import './App.css';
import { Route, Switch } from 'react-router-dom';
import PostCard from './Components/Homepage/PostCard';
import NavBar from './Components/Homepage/NavBar';
import SideCol from './Components/Homepage/SideCol';
import Events from './Components/Homepage/Events';
import ProfilePage from './Components/Homepage/ProfilePage';
import StickyMediaBar from './Components/Homepage/StickyMediaBar';
import Notablealumni from './Components/Homepage/Notablealumni';
import LoginContainer from './Components/Loginpage/LoginContainer';
import SignupContainer from './Components/Loginpage/SignupContainer';
import Home from './Components/Loginpage/Home';
import CommentPage from './Components/Homepage/CommentPage';
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
							<Col sm={2} style={{ float: 'left' }}>
								<SideCol />
							</Col>
							<Col>
								<Switch>
									{' '}
									<Route path='/feed' component={PostCard} />
									<Route path='/events' component={Events}></Route>
									<Route path='/profile/:id' exact component={ProfilePage} />
									<Route path='/featured' component={Notablealumni} />
									<Route path='/gallery' component={Gallery} />
									<Route path='/post/:id' component={CommentPage} />
								</Switch>
								{/* <CommentPage /> */}
							</Col>
						</Row>
					</Container>
				</>
			) : (
				<>
					<Route path='/' exact component={Home} />
					<Route path='/login' exact component={LoginContainer} />
					<Route path='/signup' exact component={SignupContainer} />
				</>
			)}
			<StickyMediaBar />
		</div>
	);
}

export default App;
