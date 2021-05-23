import React, { useState, useEffect } from 'react';
import { Carousel, Alert } from 'react-bootstrap';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import BoxGallery from './BoxGallery';
import { Image } from 'cloudinary-react';

const Gallery = () => {
	const [photo, setPhoto] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');
	useEffect(() => {
		Axios.get('http://localhost:3001/gallery').then((response) => {
			if (response.data.message) {
				setErrorMessage(response.data.message);
			} else setPhoto(response.data);
		});
	}, []);

	return (
		<>
			<BoxGallery />
			{errorMessage ? <Alert variant='danger'>{errorMessage}</Alert> : null}
			<div style={{ width: '40rem', marginLeft: '5%' }}>
				<Carousel>
					{photo.map((value, key) => {
						return (
							<Carousel.Item>
								<Image
									style={{ width: '550px', height: '450px' }}
									cloudName='sakshi-mini-project'
									publicId={value.photo_name}
								/>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
		</>
	);
};

export default Gallery;
