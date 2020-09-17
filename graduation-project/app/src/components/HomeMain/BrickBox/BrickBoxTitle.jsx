import React from 'react';
import s from './BrickBoxTitle.module.scss';
export default class BrickBoxTitle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className={`${s.BrickBoxTitle}`}>
				<h2>{this.props.title}</h2>
				<div className={`${s.more}`}>
					<a href={this.props.moreURL}>
						<span>查看全部</span>
						{/* i元素里面加 文字 会跑到其他的地方 */}
						<i />
					</a>
				</div>
			</div>
		);
	}
}
