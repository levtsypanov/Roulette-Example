// Инструменты
import React, { useState, useEffect } from 'react';

// VKUI_WEB
import { Button,Input,} from "@happysanta/vk-app-ui"

// VKUI
import {Panel,PanelHeader,PanelHeaderBack,} from '@vkontakte/vkui/dist';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Gallery from '@vkontakte/vkui/dist/components/Gallery/Gallery';

// CSS
import '@happysanta/vk-app-ui/dist/vkappui.css'

const Roulette = props => {

	const [index, setIndex] = useState(0);

	const { setParentState, state } = props;

	let emoji = [];

	useEffect(() => {
		emojiGen();
	}, []);

	const random = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	};


	const emojiGen = () => {
		for(let i = 1; i < 50; i++){
			emoji.push(i);
		}
		setParentState({ emoji });
	};

	const emojiList = props.state.emoji.map((e, key) =>
		<div key={key} style={{
			backgroundColor: `#${random(100, 8000)}` ,
			textAlign: 'center',
			marginTop: 50,
			fontSize: '100px'
		}} >{e}</div>
	);


	const spin = () => {
		setParentState({
			rolled: true
		});
		const winNumber = random(1, props.state.emoji.length);

		if(parseInt(state.enteredNumber) === winNumber){
			setTimeout(() => {
				setParentState({
					rolled: true
				});
				//	TODO: открыть снекбар
			}, winNumber * 200)
		} else {
			setTimeout(() => {
				setParentState({
					rolled: true
				});
			}, state.enteredNumber * 200)
		}
		console.log(winNumber);

		for(let i = 1; i < props.state.emoji.length; i++){
			if(i === winNumber) {
				setParentState({
					rolled: true
				});
				return;
			};
			setTimeout(() => {
				setIndex(i);
			}, 200 * i);
		}

	};

	return (
		<Panel id={props.id}>
			<PanelHeader left={<PanelHeaderBack onClick={() => props.go('home')} />}>
				Roulette
			</PanelHeader>
			<Group>
				<Gallery
					slideWidth="90%"
					align="center"
					style={{ height: 150 }}
					slideIndex={index}
				>
					{emojiList}
				</Gallery>
				<Div>
					<Input
						mobile={false}
						placeholder={'Введите число 1-50'}
						onChange={(e) => setParentState({
							enteredNumber: e.currentTarget.value
						})}
						name={'input'}
					/>
					<br/>
					<Button
						mobile={false}
						size={'xl'}
						onClick={spin}
						disabled={!state.enteredNumber}
						style={{ marginTop: 10 }}
					>
						Вращение
					</Button>
				</Div>
			</Group>
		</Panel>
	);
};

export default Roulette;
