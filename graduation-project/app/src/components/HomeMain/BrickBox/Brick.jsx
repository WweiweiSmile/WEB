import React from 'react';
import s from './Brick.module.scss';
import g from '../../../Global.module.scss';
export default class Brick extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let brickSub = this.props.brickSub;
		return (
			<div className={`${s.Brick}`}>
				<a href={'/#'}>
					<div className={`${s.figure}`}>
						<img src={brickSub.url} alt={brickSub.title} />
					</div>
					<h3 className={`${g.fontHidden}`}>{brickSub.title}</h3>
					<p className={`${g.fontHidden}`}>{brickSub.profile}</p>
					<p className={`${s.price}`}>
						<span>{brickSub.price}</span>
						<span>&nbsp;&nbsp;</span>
						<del>{brickSub.oldPrice}</del>
					</p>
				</a>
			</div>
		);
	}
}
