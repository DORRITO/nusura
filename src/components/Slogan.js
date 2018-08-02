import React, { Component } from "react";

import { Image, Jumbotron } from "react-bootstrap";

class Slogan extends Component {
  render() {
    return (
      <div>
        <div className="Parallax1" />
        <Jumbotron className="Parallax1">
          <div className="Center">
            <h3>Hello BreAnne!</h3>
            <div>UNIQUE EXPERIENCE</div>
            <div>INNOVATIVE TECHNOLOGIES</div>
            <h4>BUILDING A BETTER, SAFER, MORE RESILIENT FUTURE</h4>
            <h4>AlSO, NO SERVER ISSUES CAUSING EXTRA WORK!</h4>
          </div>
        </Jumbotron>
        <div className="Parallax1" />
        <div className="Parallax2" />
        <Jumbotron className="Center2">
          <p>
            116 degree weather sure feels nice.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </Jumbotron>
        <div className="Parallax2" />
        <iframe
          className="Parallax3"
          src="https://player.vimeo.com/video/279141793?title=0&amp;portrait=0&amp;muted=1&amp;autopause=0&amp;loop=1&amp;background=1&amp;app_id=122963"
          width="1300px"
          frameBorder="0"
          title="Big X Case Study"
          webkitallowfullscreen=""
          mozallowfullscreen=""
          allowFullScreen=""
          data-ready="true"
        />
      </div>
    );
  }
}

export default Slogan;
