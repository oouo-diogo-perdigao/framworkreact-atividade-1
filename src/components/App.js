import React from 'react';

import { Login } from './Login';
import { Header } from './Header';
import { MenuLateral } from './MenuLateral';
import { Main } from './Main';

/**
 * Classe da tela de entrada
 */
export class App extends React.Component {
	/**
	 * Construtor
	 * @param {*} props
	 */
	constructor(props) {
		super(props);
		this.state = {
			//screen: 'logado'
			screen: 'login'
		};
	}
	/**
	 * Função chamada apos usuario logado
	 * @param {string} state
	 */
	logar(state) {
		console.log(state);
		console.log(this);
		this.setState({ screen: state });
	}
	/**
	 * Função padrão de saida
	 * @return {string} html
	 */
	render() {
		if (this.state.screen == 'login') {
			return (
				<Login
					screen={ret => {
						this.logar(ret);
					}}
				/>
			);
		} else if (this.state.screen == 'logado') {
			return (
				<>
					<Header />
					<Main />
					<MenuLateral />
				</>
			);
		} else {
			return <div></div>;
		}
	}
}
