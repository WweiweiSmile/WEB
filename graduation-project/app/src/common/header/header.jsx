import React from 'react';
import { SiteTop } from './site-top';
import { SiteHeader } from './site-header';
import './header.scss';
export default class header extends React.Component {
	render() {
		return (
			<div>
				<SiteTop />

				<SiteHeader />
			</div>
		);
	}
}
