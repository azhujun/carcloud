import React, { Component } from 'react';

class Item extends Component {
	render() {
		return (
			<span className="filterItem">
				{this.props.text}
			</span>
		);
	}
}

class FilterItem extends Component {

	renderList(data) {
		let doms = [];
		for (let i in data) {
			let value = data[i]
			doms.push(<Item text={value} key={i} />)
		}
		return doms;
	}

	render() {
		return (
			<div className="filterBox">
				<div className="filterScrollBar" >
					{this.props.data ? this.renderList(this.props.data) : '请选择需要条件'}
				</div>
				<div className="my-icons write"></div>
			</div>
		);
	}
}

export default FilterItem;