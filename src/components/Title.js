import React, { Component } from "react";
import "../styles/Title.css";

class Title extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <div>
            <h2></h2>
        </div>
      </div>
    );
  }
}

export default Title;
