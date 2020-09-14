import React from 'react';
import s from './site-top.module.scss';
export class SiteTop extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			navtabs: [
				'小米商城',
				'MIUI',
				'loT',
				'云服务',
				'金融',
				'有品',
				'小爱开放平台',
				'企业团购',
				'资质证照',
				'协议规则',
				'下载app',
				'智能生活',
				'Select Location'
			],
			navtabsUser: [ '登录', '注册', '消息通知' ]
		};
	}
	render() {
		return (
			<div className={`${s.site_top}`}>
				<div className={`${s.site_top_content} ${s.cl}`}>
					<div className={` ${s.fl}`}>
						<ul className={`${s.navbar_ul}`}>
							{this.state.navtabs.map((value, index) => <li key={index}>{value}</li>)}
						</ul>
					</div>
					<div className={`${s.fr} ${s.buy_cart}`}>
						购物车
						<span>(0)</span>
					</div>
					<div className={` ${s.fr}`}>
						<ul className={` ${s.navbar_ul}`}>
							{this.state.navtabsUser.map((value, index) => <li key={index}>{value}</li>)}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
