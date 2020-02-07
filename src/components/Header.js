import React from 'react';

import logo from '../img/logo.svg';

import '../scss/header.scss';

/**
 * Classe da tela de entrada
 */
export class Header extends React.Component {
	/**
	 * Função padrão de saida
	 * @return {string} html
	 */
	render() {
		return (
			<header className='header'>
				<img src={logo} className='App-logo' alt='logo' />
				<ul>
					<li>Topic 1</li>
					<li>Topic 2</li>
					<li>Topic 3</li>
					<li>Topic 4</li>
				</ul>
				<input type='text' />
			</header>
		);
	}
}
