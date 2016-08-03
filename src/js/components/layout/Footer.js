import React from "react";


export default class Footer extends React.Component {
  constructor() {
    super();
    this.team = "DIET (Digital Interaction & Experience Team 2016)";
  }

  render() {
    return (
      <footer>
        <div class="row">
          <div class="col-lg-12">
            <p>Copyright &copy; {this.team}</p>
          </div>
        </div>
      </footer>
    );
  }
}