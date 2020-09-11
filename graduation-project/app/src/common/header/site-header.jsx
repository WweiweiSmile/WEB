import React from 'react';

import style from './site-header.module.scss';

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
			<div className={style.site_header}>
				<div className={`${style.header_logo}  ${style.fl}`} />
				<div className={`${style.navtab} ${style.fl}`}>
					<ul>{this.state.navtab.map((value, index) => <li key={index}>{value}</li>)}</ul>
				</div>
				<div className={`${style.search} ${style.fr}`}>
					<Search placeholder="input search text" onSearch={(value) => console.log(value)} />
				</div>
			</div>
		);
	}
}
