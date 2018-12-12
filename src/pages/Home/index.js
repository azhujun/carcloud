import React, { Component } from 'react';
import { TabBar } from '../../components';
import './index.css';
import AnimatedWrapper from "../../AnimatedWrapper";

class HomeComponent extends Component {
  render() {
    return (
      <div className="Page">
        <div className="scrollPage">
          <p>内容</p>  
          <p>内容</p>  
          <p>内容</p>  
          <p>内容</p>  
          <p>内容</p>  
        </div> 
        <TabBar />
      </div>
    );
  }
}
const Home = AnimatedWrapper(HomeComponent);
export default Home;