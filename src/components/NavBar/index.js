import React, { Component } from 'react';
import PropTypes from "prop-types";
import './index.css';

class NavBar extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.context.router.history.goBack();
  }

  render() {
    return (
      <div className="navbar">
        <div className="my-icons goback" onClick={this.goBack}></div>
        <span className="bar-title-text">{this.props.title}</span>
      </div>
    );
  }
}

export default NavBar;