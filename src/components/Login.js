import React from 'react';

//https://console.developers.google.com/apis/credentials?project=travelrpg
import { GoogleLogin } from 'react-google-login';
import { AuthKeys } from '../configs/AuthKeys';
import axios from 'axios';
/**
 * Classe da tela de entrada
 */
export class Login extends React.Component {
	/**
	 *
	 *
	 * @param {*} response
	 * @return {Promise}
	 * @memberof Login
	 */
	responseGoogle(response) {
		return new Promise((resolve, reject) => {
			console.log(this);
			console.log(response);
			axios
				.post(
					'http://localhost:8002/login',
					{},
					{
						headers: { Authorization: 'Bearer ' + response.Zi.id_token }
					}
				)
				.then(function(response) {
					console.log(response.status, response.data);
					localStorage.setItem('token', response.data);
					resolve();
				})
				.catch(err => {
					reject(err);
				});
		});
	}

	/**
	 * Função padrão de saida
	 * @return {string} html
	 */
	render() {
		const auth = new AuthKeys();
		const self = this;
		return (
			<div className='Login'>
				<GoogleLogin
					clientId={auth.getGoogleKey()}
					buttonText='Login'
					onSuccess={response => {
						this.responseGoogle(response).then(_ => self.props.screen('logado'));
					}}
					//onFailure={this.responseGoogle}
					cookiePolicy={'single_host_origin'}
				/>
			</div>
		);
	}
}
