import React from 'react';
import s from './BrickPoster.module.scss';
export default class BrickPoster extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className={`${s.BrickPoster}`}>
				<a href={'/#'}>
					<img src={this.props.brickPosterURL} alt={'手机海报'} />
				</a>
			</div>
		);
	}
}
