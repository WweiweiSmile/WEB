import React from 'react';
import s from './Spike.module.scss';
export default class Spike extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className={`${s.Spike}`}>
				<div>
					<span>小米闪购</span>
				</div>
			</div>
		);
	}
}
