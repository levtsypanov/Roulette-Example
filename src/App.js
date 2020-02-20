// Инструменты
import React, { Component } from 'react';
import connect from '@vkontakte/vk-connect';

// VKUI
import View from '@vkontakte/vkui/dist/components/View/View';

// Panels
import Home from './js/panels/Home';
import Roulette from './js/panels/Roulette';
import Spin from './js/panels/Spin';

// CSS
import './css/Style.css';
import '@vkontakte/vkui/dist/vkui.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'home',
			activeStory: 'home',

			emoji:[],

			enteredNumber: '',

			rolled: true
		};
	//	this.api = new API();
	}

	componentDidMount() {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
			if (type === 'VKWebAppGetUserInfoResult') {
				this.setState({
					fetchedUser: data,
					popout: null
				});
			}
		});
		connect.send('VKWebAppGetUserInfo');
	}

	render() {
		const go = e => {
			this.setState({
				activePanel: e
			});
		};

		const {
			fetchedUser, activePanel, popout, snackbar
		} = this.state;

		const state = this.state;

		const props = {
			fetchedUser, go, snackbar, state,
			setParentState: this.setState.bind(this)
		};
		const view = { activePanel, popout};


		return (
			<View {...view}>
				<Home id='home' {...props} />
				<Spin id='spin' {...props} />
				<Roulette id='roulette' {...props} />
			</View>
		);
	}

}

export default App;