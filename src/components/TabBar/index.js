import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './index.css';

class TabBar extends Component {
  render() {
    return (
      <div className="tabBar">
        <Link className="link" to="/home2">教练介绍</Link>
      </div>
    );
  }
}

export default TabBar;