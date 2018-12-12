import React, { Component } from 'react';
import {Select} from '../../../components';
import store from '../../../actions';
import { T } from 'react-toast-mobile';
class FilterAlert extends Component {
    constructor(props){
      super(props)
      this.onSelect=this.props.onSelect;
      this.onClick = this.onClick.bind(this);
    }

    onClick(){
      if(store.getState().schoolId && 
        store.getState().categoryId&&
        store.getState().classId&&
        store.getState().subjectId){
          let {schoolId,categoryId,classId,subjectId} = store.getState();
          this.onSelect({schoolId,categoryId,classId,subjectId})
      }else{
        T.alert('请选择所有筛选项');
      }
    }

    render() {
      return (
          <div className="Model-Alert" onClick={(e)=>{e.stopPropagation();}}>
             <div className="Model-Alert-Title">条件筛选</div>
             <Select title="驾校选择" api='schoolList'/>
             <Select title="驾照等级选择" api='selectCategory'/>
             <Select title="班级选择" api='selectClass'/>
             <Select title="科目级别选择" api='kumu'/>
             <div className="btn submit" onClick={this.onClick}>确定</div>
          </div>
      );
    }
  }
  
  export default FilterAlert;