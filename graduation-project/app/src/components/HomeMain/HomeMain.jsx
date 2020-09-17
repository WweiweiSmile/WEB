import React from 'react';
import s from './HomeMain.module.scss';
import Spike from './Spike/Spike';
import BrickBox from './BrickBox/BrickBox';

export default class HomeMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			phoneInfo: {
				title: '手机',
				moreURL: 'https://www.mi.com/a/h/14933.html',
				brickBoxMain: {
					brickPosterURL:
						'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=234&h=614&f=webp&q=90',
					bricks: [
						{
							url:
								'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/d880ff45a9a3b70527770e01521fc939.jpg?thumb=1&w=200&h=200&f=webp&q=90',
							title: '小米10 至尊版',
							profile: '120x 变焦/120w秒充/120Hx屏幕',
							price: '5299元起',
							oldPrice: ''
						}
					]
				}
			},
			appliancesInfo: {
				title: '电器',
				moreURL: 'https://www.mi.com/p/3469.html',
				brickBoxMain: {
					brickPosterURL:
						'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/574c6643ab91c6618bfb2d0e2c761d0b.jpg?thumb=1&w=234&h=614&f=webp&q=90',
					bricks: [
						{
							url:
								'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ef4c68fed730ec26bf2fa0ff620975c5.jpg?thumb=1&w=200&h=200&f=webp&q=90',
							title: 'Redmi 红米电视 70英寸',
							profile: '70英寸震撼巨屏，4k画质，细腻如真',
							price: '3199元',
							oldPrice: '3799元'
						}
					]
				}
			}
		};
	}
	render() {
		return (
			<div className={`${s.HomeMain}`}>
				<Spike />
				<BrickBox info={this.state.phoneInfo} />
				<BrickBox info={this.state.appliancesInfo} />
			</div>
		);
	}
}
