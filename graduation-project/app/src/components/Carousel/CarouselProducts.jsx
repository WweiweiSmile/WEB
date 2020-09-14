import React from 'react';
import CarouselProductList from './CarouselProductList.jsx';
import s from './CarouselProducts.module.scss';
let handleProducts = (value) => {
	if (value === undefined) return [];
	let carouselProductLists = [];
	for (let i = 0; i < value.length; i += 6) {
		carouselProductLists.push(value.slice(i, i + 6));
	}
	return carouselProductLists;
};

export default class CarouselProducts extends React.Component {
	render() {
		let CarouselProductLists = handleProducts(this.props.products);
		return (
			<div className={`${s.carousel_products} ${this.props.isHide ? s.hide : s.show} `}>
				{CarouselProductLists.map((value, index) => <CarouselProductList productList={value} key={index} />)}
			</div>
		);
	}
}
