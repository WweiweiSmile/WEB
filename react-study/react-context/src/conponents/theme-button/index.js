import React from 'react';
import { ThemeContext } from '../themes/index';
export class ThemeButton extends React.Component {
	render() {
		return (
			<div>
				<button onClick={this.props.toggleTheme} style={{ backgroundColor: this.context.background }}>
					{this.props.children}
				</button>
			</div>
		);
	}
}

ThemeButton.contextType = ThemeContext;
