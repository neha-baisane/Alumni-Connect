import React from 'react';
import './StickyMediaBar.css';
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const StickyMediaBar = () => {
	return (
		<div className='icons'>
			<a href='#' className='facebook' style={{ color: 'blue' }}>
				<FacebookIcon
					style={{
						marginRight: '8px',
						height: '45px',
						width: '45px',
						colour: 'red',
					}}
				/>
				&nbsp;Facebook
			</a>
			<a href='#' className='youtube'>
				<YouTubeIcon
					style={{
						marginRight: '8px',
						height: '45px',
						width: '45px',
						colour: 'red',
					}}
				/>
				&nbsp; Youtube
			</a>
			<a href='#' className='twitter'>
				<TwitterIcon
					style={{
						marginRight: '8px',
						height: '45px',
						width: '45px',
						colour: 'red',
					}}
				/>
				&nbsp;Twitter
			</a>
			<a href='#' className='instagram'>
				<InstagramIcon
					style={{
						marginRight: '8px',
						height: '45px',
						width: '45px',
						colour: 'red',
					}}
				/>
				&nbsp; Instagram
			</a>
		</div>
	);
};

export default StickyMediaBar;
