import React, { Component } from "react";
import "../styles/Title.css";
import "../styles/Fonts.css";

class Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, tagline } = this.props;
    return (
      <div className="app-name">
        <h1>{title}</h1>
        <div>
          <h2>{tagline}</h2>
        </div>
      </div>
    );
  }
}

export default Title;
