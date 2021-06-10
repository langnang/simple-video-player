import logo from './logo.svg';
import Welcome from './welcome';
import Clock from './Clock';
import 'antd/dist/antd.css';

import BiliBiliTimeLine from './views/TimeLine/index';
import BiliBiliIndexes from './views/Indexes';
import Player from './components/Player';
import './App.css';
import React from 'react';
import { Menu, Spin } from 'antd';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			current: 'mail',
			loading: true,
			server: false,
		};
	}

	handleClick = (e) => {
		this.setState({ current: e.key });
	};
	componentDidMount() {}
	render() {
		const { current } = this.state;
		return (
			<div className="App">
				<Router>
					<Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
						<Menu.Item key="timeline">
							<Link to="/timeline">新番时间表</Link>
						</Menu.Item>
						<Menu.Item key="indexes">
							<Link to="/indexes">番剧索引</Link>
						</Menu.Item>
						<Menu.Item key="/player">
							<Link to="/player">播放器</Link>
						</Menu.Item>
					</Menu>
					<Switch>
						<Route path="/timeline">
							<BiliBiliTimeLine />
						</Route>
						<Route path="/indexes">
							<BiliBiliIndexes />
						</Route>
						<Route path="/player">
							<Player />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}
