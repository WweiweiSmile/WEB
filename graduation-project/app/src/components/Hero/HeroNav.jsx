import React from 'react';
import s from './HeroNav.module.scss';
export default class HeroNav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			HeroNavSubs: [
				{
					url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/82abdba456e8caaea5848a0cddce03db.png?w=48&h=48',
					title: '小米秒杀'
				},
				{
					url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/806f2dfb2d27978e33fe3815d3851fa3.png?w=48&h=48',
					title: '企业团购'
				},
				{
					url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/eded6fa3b897a058163e2485532c4f10.png?w=48&h=48',
					title: 'F码通道'
				},
				{
					url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/43a3195efa6a3cc7662efed8e7abe8bf.png?w=48&h=48',
					title: '米粉卡'
				},
				{
					url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/f4846bca6010a0deb9f85464409862af.png?w=48&h=48',
					title: '以旧换新'
				},
				{
					url: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9a76d7636b08e0988efb4fc384ae497b.png?w=48&h=48',
					title: '话费充值'
				}
			]
		};
	}
	render() {
		return (
			<div className={`${s.HeroNav}`}>
				<ul>
					{this.state.HeroNavSubs.map((value, index) => (
						<li key={index}>
							<a href="/#">
								<img src={value.url} alt={value.title} />
								<p>{value.title}</p>
							</a>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
