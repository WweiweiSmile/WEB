import React from 'react';
import s from './CarouselList.module.scss';

export default class CarouselList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className={`${s.carousel_list}`}>
				<ul
					onMouseLeave={(e) => {
						this.props.carouselListLeave();
					}}
				>
					<li
						onMouseEnter={(e) => {
							this.props.carouselListHover(0);
							console.log(e.target);
						}}
					>
						<span>手机 电话卡</span>
						<span>
							<svg
								t="1599792321042"
								className="icon"
								viewBox="0 0 1024 1024"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								p-id="3178"
								width="10"
								height="10"
							>
								<path
									d="M898.901 512H696.15L125.1 0H327.85L898.9 512zM125.1 1024H327.85L898.9 512H696.15L125.1 1024z"
									fill="#ffffff"
									p-id="3179"
								/>
							</svg>
						</span>
					</li>
					<li
						onMouseEnter={(e) => {
							this.props.carouselListHover(1);
							console.log(e.target);
						}}
					>
						<span>电视 盒子</span>
						<span>
							<svg
								t="1599792321042"
								className="icon"
								viewBox="0 0 1024 1024"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								p-id="3178"
								width="10"
								height="10"
							>
								<path
									d="M898.901 512H696.15L125.1 0H327.85L898.9 512zM125.1 1024H327.85L898.9 512H696.15L125.1 1024z"
									fill="#ffffff"
									p-id="3179"
								/>
							</svg>
						</span>
					</li>
					<li
						onMouseEnter={(e) => {
							this.props.carouselListHover(2);
							console.log(e.target);
						}}
					>
						<span>笔记本 显示器</span>
						<span>
							<svg
								t="1599792321042"
								className="icon"
								viewBox="0 0 1024 1024"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								p-id="3178"
								width="10"
								height="10"
							>
								<path
									d="M898.901 512H696.15L125.1 0H327.85L898.9 512zM125.1 1024H327.85L898.9 512H696.15L125.1 1024z"
									fill="#ffffff"
									p-id="3179"
								/>
							</svg>
						</span>
					</li>
					<li
						onMouseEnter={(e) => {
							this.props.carouselListHover(3);
							console.log(e.target);
						}}
					>
						<span>家电 插线板</span>
						<span>
							<svg
								t="1599792321042"
								className="icon"
								viewBox="0 0 1024 1024"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								p-id="3178"
								width="10"
								height="10"
							>
								<path
									d="M898.901 512H696.15L125.1 0H327.85L898.9 512zM125.1 1024H327.85L898.9 512H696.15L125.1 1024z"
									fill="#ffffff"
									p-id="3179"
								/>
							</svg>
						</span>
					</li>
					<li
						onMouseEnter={(e) => {
							this.props.carouselListHover(4);
							console.log(e.target);
						}}
					>
						<span>出行 穿戴</span>
						<span>
							<svg
								t="1599792321042"
								className="icon"
								viewBox="0 0 1024 1024"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								p-id="3178"
								width="10"
								height="10"
							>
								<path
									d="M898.901 512H696.15L125.1 0H327.85L898.9 512zM125.1 1024H327.85L898.9 512H696.15L125.1 1024z"
									fill="#ffffff"
									p-id="3179"
								/>
							</svg>
						</span>
					</li>
					<li
						onMouseEnter={(e) => {
							this.props.carouselListHover(5);
							console.log(e.target);
						}}
					>
						<span>智能 路由器</span>
						<span>
							<svg
								t="1599792321042"
								className="icon"
								viewBox="0 0 1024 1024"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								p-id="3178"
								width="10"
								height="10"
							>
								<path
									d="M898.901 512H696.15L125.1 0H327.85L898.9 512zM125.1 1024H327.85L898.9 512H696.15L125.1 1024z"
									fill="#ffffff"
									p-id="3179"
								/>
							</svg>
						</span>
					</li>
					<li
						onMouseEnter={(e) => {
							this.props.carouselListHover(6);
							console.log(e.target);
						}}
					>
						<span>电源 配件</span>
						<span>
							<svg
								t="1599792321042"
								className="icon"
								viewBox="0 0 1024 1024"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								p-id="3178"
								width="10"
								height="10"
							>
								<path
									d="M898.901 512H696.15L125.1 0H327.85L898.9 512zM125.1 1024H327.85L898.9 512H696.15L125.1 1024z"
									fill="#ffffff"
									p-id="3179"
								/>
							</svg>
						</span>
					</li>
					<li
						onMouseEnter={(e) => {
							this.props.carouselListHover(7);
							console.log(e.target);
						}}
					>
						<span>健康 儿童</span>
						<span>
							<svg
								t="1599792321042"
								className="icon"
								viewBox="0 0 1024 1024"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								p-id="3178"
								width="10"
								height="10"
							>
								<path
									d="M898.901 512H696.15L125.1 0H327.85L898.9 512zM125.1 1024H327.85L898.9 512H696.15L125.1 1024z"
									fill="#ffffff"
									p-id="3179"
								/>
							</svg>
						</span>
					</li>
					<li
						onMouseEnter={(e) => {
							this.props.carouselListHover(8);
							console.log(e.target);
						}}
					>
						<span>耳机 音箱</span>
						<span>
							<svg
								t="1599792321042"
								className="icon"
								viewBox="0 0 1024 1024"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								p-id="3178"
								width="10"
								height="10"
							>
								<path
									d="M898.901 512H696.15L125.1 0H327.85L898.9 512zM125.1 1024H327.85L898.9 512H696.15L125.1 1024z"
									fill="#ffffff"
									p-id="3179"
								/>
							</svg>
						</span>
					</li>
					<li
						onMouseEnter={(e) => {
							this.props.carouselListHover(9);
							console.log(e.target);
						}}
					>
						<span>生活 箱包</span>
						<span>
							<svg
								t="1599792321042"
								className="icon"
								viewBox="0 0 1024 1024"
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								p-id="3178"
								width="10"
								height="10"
							>
								<path
									d="M898.901 512H696.15L125.1 0H327.85L898.9 512zM125.1 1024H327.85L898.9 512H696.15L125.1 1024z"
									fill="#ffffff"
									p-id="3179"
								/>
							</svg>
						</span>
					</li>
				</ul>
			</div>
		);
	}
}
