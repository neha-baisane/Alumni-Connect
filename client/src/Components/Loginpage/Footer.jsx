import React from 'react';
import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
} from './FooterStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faYoutube,
	faFacebook,
	faTwitter,
	faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import logo2 from './logo2.png';

const Footer = () => {
	return (
		<Box>
			<Container>
				<Row>
					<Column style={{ display: 'flex', marginTop: '30px' }}>
						<img
							style={{
								float: 'left',
								height: '150px',
								width: '200px',
							}}
							src={logo2}
							className='Image'
						/>
					</Column>
					<Column class='Column'>
						<Heading style={{ marginTop: '30px' }}>About Us</Heading>
						<p style={{ fontSize: '13px', color: 'white' }}>
							Platform to connect students with their Alums
						</p>
					</Column>
					<Column class='Column'>
						<Heading style={{ marginTop: '30px' }}>Contact Us</Heading>
						<p style={{ fontSize: '13px', color: 'white' }}>
							Email: alumni.connect@gmail.com
						</p>
					</Column>
					<Column class='Column'>
						<Heading style={{ marginTop: '30px' }}>Social Media</Heading>
						<ul>
							<li>
								<a
									href='https://www.youtube.com/c/jamesqquick'
									className='youtube social'
									style={{ marginLeft: '0px' }}>
									<FontAwesomeIcon icon={faYoutube} size='lg' />
								</a>
							</li>
							<li>
								<a
									href='https://www.facebook.com/learnbuildteach/'
									className='facebook social'
									style={{ marginLeft: '12px' }}>
									<FontAwesomeIcon icon={faFacebook} size='lg' />
								</a>
							</li>
							<li>
								{' '}
								<a
									href='https://www.twitter.com/jamesqquick'
									className='twitter social'
									style={{ marginLeft: '14px' }}>
									<FontAwesomeIcon icon={faTwitter} size='lg' />
								</a>
							</li>
							<li>
								{' '}
								<a
									href='https://www.instagram.com/learnbuildteach'
									className='instagram social'
									style={{ marginLeft: '16px' }}>
									<FontAwesomeIcon icon={faInstagram} size='lg' />
								</a>
							</li>
						</ul>
					</Column>
				</Row>
			</Container>
			<br></br>
			<div>
				<p
					style={{
						color: '#FFFFFF',
						marginTop: '5px',
						textAlign: 'center',
						marginBottom: '2px',
					}}>
					Copyright © 2021 Alumni Connect. All Rights Reserved
				</p>
			</div>
		</Box>
	);
};
export default Footer;
