import React, { Component } from "react";

import { Image, Jumbotron } from "react-bootstrap";

class Slogan extends Component {
  render() {
    return (
      <div>
        <div className="Parallax1"></div>
        <Jumbotron>
          <div>UNIQUE EXPERIENCE</div>
          <div>INNOVATIVE TECHNOLOGIES</div>
          <h3>BUILDING A BETTER, SAFER, MORE RESILIENT FUTURE</h3>
        </Jumbotron>
        <div className="Parallax2"></div>
      </div>
    );
  }
}

export default Slogan;
