import React, { Component } from 'react';
import AnimatedWrapper from "../../AnimatedWrapper";
import { NavBar, Modal } from '../../components';
import FilterItem from './filterItem';
import FilterAlert from './filterAlert';
import ListItem from './ListItem';
import { doGet } from '../../servers/http';
import store from '../../actions'
import './index.css';

class PageComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false,
      filterData: null,
      checkUser: false,
      listData: []
    };

    this.onSelect = this.onSelect.bind(this);
    this.onSwitch = this.onSwitch.bind(this);
  }

  componentDidMount() {
    doGet('/wxcx/front/coach/info', {
      page: 1,
      size: 10
    }).then(res => {
      if (res && res.code === 200) {
        this.setState({
          listData: res.data.content
        })
      }
    });
  }

  onSwitch() {
    this.setState({
      showAlert: !this.state.showAlert
    });

  }

  onSelect(data) {
    this.setState({
      checkUser: true,
      filterData: store.getState().filterData
    });

    doGet('/wxcx/front/coach/selectResult', data).then(res => {
      if (res && res.code === 200) {
        this.setState({
          listData: res.data
        })
      }
    });

    this.onSwitch()
  }

  render() {
    return (
      <div className="Page">
        <NavBar title="教练选择" />
        <div className="filterBar" onClick={this.onSwitch}>
          选择条件：
          <FilterItem data={this.state.filterData} />
        </div>
        <div className="scrollBax">
          {this.state.listData.map((comment) => (
            <ListItem data={comment} key={comment.id} showBtn={this.state.checkUser} />
          ))}
        </div>
        <Modal show={this.state.showAlert} onSwitch={this.onSwitch}>
          <FilterAlert onSelect={this.onSelect} />
        </Modal>
      </div>
    );
  }
}

const Page = AnimatedWrapper(PageComponent);
export default Page;