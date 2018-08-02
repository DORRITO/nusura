import React, { Component } from "react";

import { Image, Jumbotron } from "react-bootstrap";

class Slogan extends Component {
  render() {
    return (
      <div>
        <div className="Parallax1"></div>
        <Jumbotron className="Parallax1">
           <div className="Center">
             <h3>Hello BreAnne!</h3>
             <div>UNIQUE EXPERIENCE</div>
             <div>INNOVATIVE TECHNOLOGIES</div>
             <h4>BUILDING A BETTER, SAFER, MORE RESILIENT FUTURE</h4>
             <h4>AlSO, NO SERVER ISSUES CAUSING EXTRA WORK!</h4>
          </div>
        </Jumbotron>
        <div className="Parallax1"></div>
        <div className="Parallax2"></div>
        <iframe src="https://player.vimeo.com/video/279141793?title=0&amp;portrait=0&amp;muted=1&amp;autopause=0&amp;loop=1&amp;background=1&amp;app_id=122963" width="1280" height="360" frameborder="0" title="Big X Case Study" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" data-ready="true"></iframe>
      </div>
    );
  }
}

export default Slogan;
