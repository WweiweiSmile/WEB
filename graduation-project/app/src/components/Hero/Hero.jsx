import React from 'react';
import s from './Hero.module.scss';
import HeroNav from './HeroNav';
import HeroGoods from './HeroGoods';
export default class Hero extends React.Component {
	render() {
		return (
			<div className={`${s.Hero}`}>
				<HeroNav />
				<HeroGoods />
			</div>
		);
	}
}
