import React from 'react';

import './site-header.scss';

import { Input } from 'antd';
const { Search } = Input;
export class SiteHeader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			navtab: [ '小米手机', 'Redmi红米', '电视', '笔记本', '家电', '路由器', '智能硬件', '服务', '社区' ]
		};
	}
	render() {
		return (
			<div className="site_header">
				<div className="header_logo fl" />
				<div className="navtab fl">
					<ul>{this.state.navtab.map((value, index) => <li key={index}>{value}</li>)}</ul>
				</div>
				<div className="search fr">
					<Search placeholder="input search text" onSearch={(value) => console.log(value)} />
				</div>
			</div>
		);
	}
}
