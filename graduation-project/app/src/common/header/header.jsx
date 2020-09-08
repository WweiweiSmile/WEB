import React from 'react';
import { Layout } from 'antd';
let { Header, Footer, Content } = Layout;
export default class header extends React.Component {
	render() {
		return (
			<Layout className={Layout}>
				<Header>
					<div>lllllll</div>
				</Header>
				<Content> </Content>
				<Footer> </Footer>
			</Layout>
		);
	}
}
