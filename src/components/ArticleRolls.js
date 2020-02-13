import React from "react";
import "../css/ArticleRolls.css";

/**
 * Classe da tela de entrada
 */
export class ArticleRolls extends React.Component {
  /**
   * Função padrão de saida
   * @return {string} html
   */
  render() {
    console.log(this);
    return (
      <section className="articleRolls">
        {this.props.articles.map((item, id) => (
          <article key={id}>
            <img src={item.img} alt={item.text} />
            <div>{item.text}</div>
          </article>
        ))}
      </section>
    );
  }
}
