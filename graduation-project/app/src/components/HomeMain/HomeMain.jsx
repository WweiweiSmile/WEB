import React from 'react';
import s from './HomeMain.module.scss';
import Spike from './Spike/Spike';
export default class HomeMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className={`${s.HomeMain}`}>
				<Spike />
			</div>
		);
	}
}
