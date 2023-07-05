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
        <div className="container">
          <h1>{title}</h1>
          <h3>{tagline}</h3>
        </div>
        <div>
        </div>
      </div>
    );
  }
}

export default Title;
