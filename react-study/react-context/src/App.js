import React from 'react';
import { ThemeButton } from './conponents/theme-button';
import { Themes, ThemeContext } from './conponents/themes';

class Toolbar extends React.Component {
	render() {
		console.log(this.props);
		return <ThemeButton toggleTheme={this.props.toggleTheme}>Change Theme</ThemeButton>;
	}
}

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			theme: Themes.light
		};
	}

	toggleTheme = () => {
		this.setState({
			theme: this.state.theme === Themes.light ? Themes.dark : Themes.light
		});
	};
	render() {
		return (
			<div>
				<ThemeContext.Provider value={this.state.theme}>
					<Toolbar toggleTheme={this.toggleTheme} />
				</ThemeContext.Provider>
			</div>
		);
	}
}
export default App;
