import styled from 'styled-components';

export const Box = styled.div`
	// padding: 10px 10px;

	background: #00131a;

	position: relative;

	padding: 30px 10px 0px 10px;

	bottom: 0;

	width: 100%;

	@media (max-width: 1000px) {
		padding: 0px 0px;
	}
`;

export const Container = styled.div`
	display: flex;

	flex-direction: column;

	justify-content: center;

	float: center;

	max-width: 1000px;

	margin: 0 auto;

	background: #00131a;

	height: 80px;
`;

export const Column = styled.div`
	display: flex;

	flex-direction: column;

	text-item: center;

	margin-left: 20px;
`;

export const Row = styled.div`
	display: grid;

	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

	grid-gap: 10px;

	@media (max-width: 100px) {
		grid-template-columns: repeat(auto-fill, minmax(20px, 1fr));
	}
`;

export const FooterLink = styled.a`
	color: white;

	margin-bottom: 10px;

	font-size: 2px;

	text-decoration: none;

	&:hover {
		color: cyan;

		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 15px;

	color: #fff;

	margin-bottom: 10px;

	font-weight: bold;

	margin: 2px;
`;
