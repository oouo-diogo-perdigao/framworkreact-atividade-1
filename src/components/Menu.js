import React from "react";

import "../css/Menu.css";

/**
 * Classe da tela de entrada
 */
export class Menu extends React.Component {
  /**
   * Função padrão de saida
   * @return {string} html
   */
  render() {
    return (
      <nav className="menu">
        <ul>
          <li>Section 1</li>
          <li>Section 2</li>
          <li>Section 3</li>
          <li>Section 4</li>
        </ul>
      </nav>
    );
  }
}
