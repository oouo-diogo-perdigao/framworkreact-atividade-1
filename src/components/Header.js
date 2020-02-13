import React from "react";

import logo from "../img/logo.svg";

import "../css/Header.css";

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
      <header id="header">
        <ul>
          <li>Topic 1</li>
          <li>Topic 2</li>
          <li>Topic 3</li>
          <li>Topic 4</li>
        </ul>
        <input type="text" />
        <img src={logo} className="logo" alt="logo" />
      </header>
    );
  }
}
