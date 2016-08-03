import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: true,
    };

    this.title = "DIET";
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});

    // console.log( this.state );
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;

    return (
      <nav className="diet-navigation">
        <div className="title-bar show-for-small-only" data-responsive-toggle="example-menu">
          <button className="menu-icon" type="button" data-toggle></button>
          <div className="title-bar-title">Menu</div>
        </div>

        <div className="top-bar hide-for-small-only" id="example-menu">
          <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu>
              <li className="menu-text"><IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>{this.title}</IndexLink></li>
              <li activeClassName="active"><Link to="transitions" onClick={this.toggleCollapse.bind(this)}>Transitions</Link></li>
              <li activeClassName="active"><Link to="hovers" onClick={this.toggleCollapse.bind(this)}>Hovers</Link></li>
            </ul>
          </div>
          <div className="top-bar-right"></div>
        </div>
      </nav>
    );
  }
}
