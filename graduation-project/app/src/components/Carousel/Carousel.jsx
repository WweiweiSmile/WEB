import React from 'react';
import CarouselList from './CarouselList';
import CarouselProducts from './CarouselProducts';
import style from './Carousel.module.scss';
import { Carousel } from 'antd';
import Carousel_1 from '../../assets/carousel-1.jpg';
import Carousel_2 from '../../assets/carousel-2.jpg';
import Carousel_3 from '../../assets//carousel-3.jpg';

let CarouselImgs = [];
CarouselImgs.push(Carousel_1);
CarouselImgs.push(Carousel_2);
CarouselImgs.push(Carousel_3);

export default class CarouselBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			CarouselImgs,
			products: [
				{
					target: '#',
					imgURL:
						'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ca871528d3420622f21f25be7aba58c.png?thumb=1&w=40&h=40&f=webp&q=90',
					title: '标题1'
				},
				{
					target: '#',
					imgURL:
						'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f5aad5f708998e76742d75d7c6b1394c.png?thumb=1&w=40&h=40&f=webp&q=90',
					title: '标题2'
				},
				{
					target: '#',
					imgURL:
						'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=40&h=40&f=webp&q=90',
					title: '标题3'
				},
				{
					target: '#',
					imgURL:
						'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cc563c76a7383d8030d1c23f31c60cb9.png?thumb=1&w=40&h=40&f=webp&q=90',
					title: '标题4'
				},
				{
					target: '#',
					imgURL:
						'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f382e29367ad5852fc1adfdae1332d5c.png?thumb=1&w=40&h=40&f=webp&q=90',
					title: '标题5'
				},
				{
					target: '#',
					imgURL:
						'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8ade0163e9fdbd92a4b7d7ee3aeab905.jpg?thumb=1&w=40&h=40',
					title: '标题6'
				},
				{
					target: '#',
					imgURL:
						'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0803dc7125ffa3447b04b1ae60f57a2b.jpg?thumb=1&w=40&h=40&f=webp&q=90',
					title: '标题7'
				},
				{
					target: '#',
					imgURL:
						'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/461bf013d08a7a91423cafcbc5ff9339.jpg?thumb=1&w=40&h=40&f=webp&q=90',
					title: '标题8'
				}
			]
		};
	}
	render() {
		return (
			<div className={style.carousel_box}>
				<CarouselList />
				<CarouselProducts products={this.state.products} />
				<Carousel autoplay>
					{this.state.CarouselImgs.map((CarouselImg, index) => (
						<div key={index}>
							<img
								style={{
									width: '1226px',
									height: '460px'
								}}
								alt={'图片'}
								src={CarouselImg}
							/>
						</div>
					))}
					<div>
						<img
							style={{
								width: '1226px',
								height: '460px'
							}}
							alt={'图片'}
							src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=40&h=40&f=webp&q=90"
						/>
					</div>
				</Carousel>
			</div>
		);
	}
}
