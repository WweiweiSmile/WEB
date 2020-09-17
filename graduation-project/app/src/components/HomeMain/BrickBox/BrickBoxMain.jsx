import React from 'react';
import s from './BrickBoxMain.module.scss';
import Brick from './Brick';
import BrickPoster from './BrickPoster';
export default class BrickBoxMain extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let brickPosterURL = this.props.brickBoxMain.brickPosterURL;
		let bricks = this.props.brickBoxMain.bricks;
		return (
			<div className={`${s.PhoneMain}`}>
				<BrickPoster brickPosterURL={brickPosterURL} />
				<div className={`${s.brickSubs}`}>
					<Brick brickSub={bricks[0]} />
					<Brick brickSub={bricks[0]} />
					<Brick brickSub={bricks[0]} />
					<Brick brickSub={bricks[0]} />
					<Brick brickSub={bricks[0]} />
					<Brick brickSub={bricks[0]} />
					<Brick brickSub={bricks[0]} />
					<Brick brickSub={bricks[0]} />
					<Brick brickSub={bricks[0]} />
				</div>
			</div>
		);
	}
}
