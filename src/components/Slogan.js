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
             <h4>NO SERVER ISSUES CAUSING EXTRA WORK!</h4>
             <h4>BUILDING A BETTER, SAFER, MORE RESILIENT FUTURE</h4>
          </div>
        </Jumbotron>
        <div className="Parallax2"></div>
        <video src="https://player.vimeo.com/video/279141793?title=0&portrait=0&muted=1&autopause=0&loop=1&background=1&app_id=122963" autoplay loop type="video/mp4" className="Parallax3">
        </video>
      </div>
    );
  }
}

export default Slogan;
