import React, { Component } from 'react';
import classnames from "classnames";
import {getApi,doGet} from '../../servers/http';
import store from '../../actions';
import './index.css';

class Select extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      text: this.props.title,
      api:this.props.api,
      list: []
    }
    store.subscribe(()=>{
      if(store.getState().selectList[this.state.api] && store.getState().selectList[this.state.api].length===0){
        this.setState({
          text:this.props.title
        })
      }
    });
    this.getText = this.getText.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  canGetData(api){
    let shour = false;
    switch(api){
      case "schoolList":
        shour = true;
        break;
      case "selectCategory":
        if(store.getState().schoolId){
          shour = true;
        }
        break;
      case "selectClass":
        if(store.getState().schoolId && store.getState().categoryId){
          shour = true;
        }
        break;
      default:
    }
    return shour;
  }

  onSelect(data){
    let key = '';
    switch (this.state.api) {
      case 'schoolList':
        key = 'schoolId';
        store.dispatch({
          type:"selectList",
          key:'selectCategory',
          value:[]
        });
        store.dispatch({
          type:"selectList",
          key:'selectClass',
          value:[]
        });
        break;
      case 'selectCategory':
        key = 'categoryId';
        store.dispatch({
          type:"selectList",
          key:'selectClass',
          value:[]
        });
        break;
      case 'selectClass':
        key = 'classId';
        break;
      case 'kumu':
        key = 'subjectId';
        break;
      default:
        break;
    }

    store.dispatch({
      type:"setData",
      key,
      value:data.id
    });

    let text = this.getText(data);
    store.dispatch({
      type:"filterData",
      key:this.state.api,
      value:text
    });

    this.setState({
      text,
      open: !this.state.open
    });
  }

  getData(api){
    if(store.getState().selectList[this.state.api] && store.getState().selectList[this.state.api].length>0){
      return store.getState().selectList[this.state.api];
    }
    if(this.canGetData(api)){
      let data = {};
      switch (api) {
        case 'selectCategory':
          data.schoolId = store.getState().schoolId;
          break;
        case 'selectClass':
          data.schoolId = store.getState().schoolId;
          data.categoryId = store.getState().categoryId;
          break;
        default:
          break;
      }
      
      doGet(getApi(api), data).then(res=>{
        if(res && res.code === 200){
          this.setState({
            list:res.data
          });
          store.dispatch({
            type:"selectList",
            key:this.state.api,
            value:res.data
          })
        }else{
          console.log("后台返回出错 COMPONENTS Select line 82")
        }
      })
    }

    return [];
  }

  onClick(e) {
    let callBackData = this.getData(this.state.api);
    this.setState({
      list: callBackData
    });
    
    this.setState({
      open: !this.state.open
    });
  }

  getText(data){
    let str = data.text||data.className||data.categoryName||data.name;
    return str;
  }

  renderList(data){
    if(data && data.length===0){
      return (<li className="select-list-item" onClick={()=>{
        this.setState({
          open:false
        });
      }} >加载中。。。</li>)
    }

    let doms = [];
    for(let i = 0,ih = data.length;i<ih;i++){
      let _this = data[i];
      doms.push(<li className="select-list-item" onClick={(e)=>{e.stopPropagation();this.onSelect(_this)}} key={i} >{this.getText(_this)}</li>)
    }
    return doms;
  }
  
  render() {
    return (
      <div className="select-box" onClick={this.onClick}>
        <div className="select-row">{this.state.text}</div>
        <div className={classnames("select-hidden-box", { "show": this.state.open })} >
          <ul>
            {this.state.open?this.renderList(this.state.list):''}
          </ul>
        </div>
        <i className={classnames("my-icons jt", { "open": this.state.open })}></i>
      </div>
    );
  }
}

export default Select;