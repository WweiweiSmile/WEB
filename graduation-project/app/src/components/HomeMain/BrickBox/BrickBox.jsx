import React from 'react';
import s from './BrickBox.module.scss';
import BrickBoxTitle from './BrickBoxTitle';
import BrickBoxMain from './BrickBoxMain';
export default class Phone extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		let info = this.props.info;

		return (
			<div className={s.BrickBox}>
				<div>
					<BrickBoxTitle title={info.title} moreURL={info.moreURL} />
					<BrickBoxMain brickBoxMain={info.brickBoxMain} />
				</div>
			</div>
		);
	}
}
