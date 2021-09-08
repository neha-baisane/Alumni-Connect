import React, { useState, useEffect } from 'react';
import { Carousel, Alert, OverlayTrigger, Tooltip } from 'react-bootstrap';
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

			<div style={{ width: '38rem', marginLeft: '15%', height: '50%' }}>
				{errorMessage ? <Alert variant='danger'>{errorMessage}</Alert> : null}
				<Carousel className='shadow'>
					{photo.map((value, key) => {
						return (
							<Carousel.Item>
								<Image
									style={{ width: '38rem', height: '50%' }}
									cloudName='sakshi-mini-project'
									publicId={value.photo_name}
								/>
					
								<figcaption>
									<h5 className='font-italic'>Image By : {value.user_name}</h5>
								</figcaption>
								
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
		</>
	);
};

export default Gallery;
