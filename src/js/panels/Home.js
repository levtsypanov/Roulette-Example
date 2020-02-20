// Инструменты
import React from 'react';

// VKUI_WEB
import { Button,} from "@happysanta/vk-app-ui"

// VKUI
import {Panel, PanelHeader,} from '@vkontakte/vkui';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Div from '@vkontakte/vkui/dist/components/Div/Div';

// CSS
import '@happysanta/vk-app-ui/dist/vkappui.css'

const Home = props => (
	<Panel id={props.id}>
		<PanelHeader>Пример</PanelHeader>
		<Group>
		<Div>
				<Button className="ButtonRoulette1" mobile={false} onClick={() => props.go('roulette')}>
				Рулетка с Цифрами
				</Button>
			</Div>
			<Div>
				<Button className="ButtonRoulette1" mobile={false} onClick={() => props.go('spin')}>
				Рулетка с стикамиᅠ 
				</Button>
			</Div>
		</Group>
	</Panel>
);

export default Home;
