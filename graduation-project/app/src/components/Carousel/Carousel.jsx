import React from 'react';
import './Carousel.scss';
import { Carousel } from 'antd';

export default class CarouselBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			imgBG: [
				{
					width: '1226px',
					height: '460px',
					background: 'url(../../assets/carousel-1.webp)',
					backgroundSize: 'cover'
				},
				{
					background: '../../assets/carousel-2.webp'
				},
				{
					background: '../../assets/carousel-3.webp'
				},
				{
					background: '../../assets/carousel-4.webp'
				}
			]
		};
	}
	render() {
		return (
			<div className="carousel_box">
				<Carousel autoplay>
					<div>
						<div
							style={{
								width: '1226px',
								height: '460px',
								backgroundImage: '../../assets/carousel-1.jpg',
								// background: 'url("../../assets/carousel-1.jpg")',
								backgroundSize: 'cover'
							}}
						/>
					</div>
					<div>
						<div
							style={{
								width: '1226px',
								height: '460px',
								// background: 'url(../../assets/carousel-2.webp)',
								backgroundSize: 'cover',
								background: 'pink'
							}}
						/>
					</div>
				</Carousel>
			</div>
		);
	}
}
