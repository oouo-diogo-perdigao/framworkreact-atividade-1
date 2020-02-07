import React from 'react';

import img1 from '../img/logo192.png';

/**
 * Classe da tela de entrada
 */
export class Main extends React.Component {
	/**
	 * Função padrão de saida
	 * @return {string} html
	 */
	render() {
		return (
			<main className='main'>
				<div>
					<ul>
						<li>Section 1</li>
						<li>Section 2</li>
						<li>Section 3</li>
						<li>Section 4</li>
					</ul>
				</div>

				<div>
					<img src={img1} />
					<div>texto 1</div>
				</div>
				<div>
					<img src={img1} />
					<div>texto 1</div>
				</div>
				<div>
					<img src={img1} />
					<div>texto 1</div>
				</div>
				<div>
					<img src={img1} />
					<div>texto 1</div>
				</div>
			</main>
		);
	}
}
