import React from 'react';
import './App.css';
import Header from './common/header/header';
import Carousel from './components/Carousel/Carousel.jsx'
import Hero from './components/Hero/Hero'
import HomeMain from './components/HomeMain/HomeMain.jsx'
function App() {
	return (
	<>
	<Header />
	<Carousel></Carousel>
	<Hero></Hero>
	<HomeMain></HomeMain>

	</>

	
		)
}

export default App;
