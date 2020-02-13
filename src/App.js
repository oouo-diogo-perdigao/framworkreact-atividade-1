import React from "react";
import "./css/App.css";

import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { SideMenu } from "./components/SideMenu";
import { ArticleRolls } from "./components/ArticleRolls";

import img1 from "./img/ceu.jpg";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.articles = [
      {
        img: img1,
        text: `
		Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nec fermentum diam. Fusce feugiat, diam dapibus ultricies
		mattis, nulla ligula euismod libero, eget accumsan nulla velit non risus. Sed rhoncus nulla sed erat efficitur efficitur.
		Proin convallis libero quis imperdiet pulvinar. Pellentesque cursus erat tempor posuere sollicitudin. Aliquam purus augue,
		vulputate vitae nulla non, iaculis bibendum dolor. Pellentesque blandit ex eget tempor facilisis.
		Phasellus et est molestie, interdum dui vel, maximus ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
		et gravida tellus. Integer et eros sagittis, hendrerit arcu at, ultricies tortor. In hac habitasse platea dictumst.
		`
      },
      { img: img1, text: "texto 2" },
      { img: img1, text: "texto 3" },
      { img: img1, text: "texto 4" },
      { img: img1, text: "texto 5" },
      { img: img1, text: "texto 6" },
      { img: img1, text: "texto 7" }
    ];
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Menu />
        <ArticleRolls articles={this.articles} />
        <SideMenu />
      </div>
    );
  }
}
