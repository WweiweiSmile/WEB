import React from 'react';
import s from './HeroGoods.module.scss';
export default class HeroGoods extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			HeroGoodsSubs: [
				{
					url:
						'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c0c05274f2fbb55fbccb89622f798907.jpg?w=632&h=340',
					title: 'Redmi K30 Pro'
				},
				{
					url:
						'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3ca70ef337bf7c6d93aef6b59917bf6b.jpg?w=632&h=340',
					title: 'Redmi 10x Pro'
				},
				{
					url:
						'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/816a66edef10673b4768128b41804cae.jpg?w=632&h=340',
					title: '小米手环4'
				}
			]
		};
	}
	render() {
		return (
			<div className={`${s.HeroGoods}`}>
				<ul>
					{this.state.HeroGoodsSubs.map((value, index) => (
						<li key={index}>
							<img src={value.url} style={{ width: '316px', height: '170px' }} alt={value.title} />
						</li>
					))}
				</ul>
			</div>
		);
	}
}
