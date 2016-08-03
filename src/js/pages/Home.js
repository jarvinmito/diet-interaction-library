import React from "react";
import { Link } from "react-router";

export default class Home extends React.Component {
	constructor() {
		super();
		this.title = "Digital Interaction & Experience Team";
	}

	toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});

    // console.log( this.state );
  }

  render() {
    // console.log("home");
    return (
	    <div className="diet-home">
		    <div className="diet-container">
		      <h1 className="diet-title">{this.title}</h1>
		      <Link to="transitions" className="hollow button large secondary">Explore</Link>
		    </div>
	    </div>
    );
  }
}
