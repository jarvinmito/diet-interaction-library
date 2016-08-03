import React from "react";
import { Link, Router } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  componentDidMount() {
    // console.log( Router );
  }

  render() {
    const { location, route } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };

    // console.log( route, location );

    var page = this.props.children;

    if( location.pathname != '/'){
      page = (
        <div>
          <Nav location={location} />
          <div class="container" style={containerStyle}>
            <div class="row">
              <div class="column">
                <h2>Digital Interaction & Experience Team</h2>
                <h4>Interaction Design Library</h4>
                {this.props.children}
              </div>
            </div>
          </div>
          <Footer/>
        </div>
        );
    }

    return (<div>{page}</div>);
  }
}
