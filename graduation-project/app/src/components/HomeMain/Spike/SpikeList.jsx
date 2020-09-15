import React from 'react';
import s from './SpikeList.module.scss';
export default class SpikeList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			spikeGoods: [
				{
					url:
						'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1587448932.00311636.jpg?thumb=1&w=200&h=200',
					title: '米家天然乳胛护颈枕S 灰色',
					profile: '大颗粒释压体验，  升级好睡眠',
					price: '199元',
					oldPrice: '249元'
				},
				{
					url:
						'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1560238127.40319869.png?thumb=1&w=200&h=200',
					title: '小米手环4 NFC版 黑色',
					profile: '大屏彩显 ，可刷公交 ，门禁',
					price: '179元',
					oldPrice: '229元'
				},
				{
					url:
						'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1548833307.52655717.jpg?thumb=1&w=200&h=200',
					title: '米兔故事机 mini 蓝牙版 蓝色',
					profile: '陪伴宝宝时时刻刻',
					price: '99元',
					oldPrice: '149元'
				},
				{
					url:
						'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1565264857.64986727.jpg?thumb=1&w=200&h=200',
					title: '小米降噪项圈蓝牙耳机 黑色',
					profile: '无线降噪 静无止静',
					price: '399元',
					oldPrice: '499元'
				},
				{
					url:
						'https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1583742157.45137560.jpg?thumb=1&w=200&h=200',
					title: '米家16合1棘螺丝刀 黑色',
					profile: '高效省力，随取随用',
					price: '89元',
					oldPrice: '99元'
				}
			],
			left: '0px',
			page: 1,
			borderColor: [ s.borderColor_1, s.borderColor_2, s.borderColor_3, s.borderColor_4, s.borderColor_5 ]
		};
	}
	// 点击一次  992px
	prev = () => {
		let currenLeft = parseInt(this.state.left.slice(0, 3));
		currenLeft = currenLeft + 992 > 0 ? 0 : currenLeft + 992;
		this.setState({ left: currenLeft + 'px' });
	};
	next = () => {
		let currenLeft = parseInt(this.state.left.slice(0, 3));
		let sumLeft = -(this.state.spikeGoods.length - 4) * 248;
		currenLeft = currenLeft - 992 < sumLeft ? sumLeft : currenLeft - 992;
		this.setState({ left: currenLeft + 'px' });
	};
	render() {
		return (
			<div className={`${s.spike_list}`}>
				<div className={`${s.controls}`}>
					<span onClick={this.prev}>&lt;</span>
					<span onClick={this.next}>&gt;</span>
				</div>
				<div className={`${s.spike_goods}`}>
					<ul style={{ left: this.state.left }}>
						{this.state.spikeGoods.map((value, index) => (
							<li key={index} className={`${this.state.borderColor[index % 5]}`}>
								<a href="/#">
									<div className={`${s.content}`}>
										<div className={`${s.thumb}`}>
											<img src={value.url} alt={value.title} />
										</div>
										<h3>{value.title}</h3>
										<p>{value.profile}</p>
										<div className={`${s.price}`}>
											<span>{value.price}</span>
											<del>{value.oldPrice}</del>
										</div>
									</div>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		);
	}
}
