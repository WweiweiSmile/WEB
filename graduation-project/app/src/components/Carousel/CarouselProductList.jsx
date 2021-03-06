import React from 'react';
import s from './CarouselProductList.module.scss';

export default class CarouselProductList extends React.Component {
	render() {
		return (
			<div className={`${s.carousel_product_list}`}>
				<ul>
					{this.props.productList.map((value, index) => (
						<li key={index}>
							<a href={value.target}>
								<img src={value.imgURL} alt="" />
								<span>{value.title}</span>
							</a>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
