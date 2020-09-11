import React from 'react';
import CarouselProductList from './CarouselProductList.jsx';
import './CarouselProducts.scss';
let handleProducts = (value) => {
	let carouselProductLists = [];
	for (let i = 0; i < value.length; i += 6) {
		carouselProductLists.push(value.slice(i, i + 6));
	}
	console.log(carouselProductLists);
	return carouselProductLists;
};

export default class CarouselProducts extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			CarouselProductLists: handleProducts(this.props.products)
		};
	}

	render() {
		return (
			<div className="carousel_products">
				{this.state.CarouselProductLists.map((value, index) => (
					<CarouselProductList className="carousel_product_list" productList={value} key={index} />
				))}
			</div>
		);
	}
}
