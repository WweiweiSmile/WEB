import React from 'react';
import s from './Spike.module.scss';
import SpikeCountdown from './SpikeCountdown';
import SpikeList from './SpikeList';
export default class Spike extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className={`${s.Spike}`}>
				<div className={`${s.title}`}>
					<h2>小米闪购</h2>
				</div>
				<SpikeCountdown />
				<SpikeList />
			</div>
		);
	}
}
