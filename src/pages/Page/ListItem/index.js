import React, { Component } from 'react';

class Star extends Component {
	createStar() {
		var doms = [];
		for (var i = 0; i < this.props.datalangth; i++) {
			doms.push(<span className="my-icons star" key={i}></span>);
		}
		return doms;
	}

	render() {
		return (
			<div className="star-box">
				{this.createStar()}
			</div>
		)
	}
}

class ListItem extends Component {
	render() {
		return (
			<div className="coach-list-item">
				<div className="coach-image-box">
					<img alt="头像" src={this.props.data.headImg} />
				</div>
				<div className="coach-message-box">
					<p className="coach-message-box-name">姓名：{this.props.data.name}</p>
					<Star datalangth={this.props.data.coachScore} />
					<p className="style">{this.props.data.style}</p>
					{this.props.showBtn ? <div className="btn">选择TA</div> : ''}
					<div className="btn">查看详情</div>
				</div>
			</div>
		);
	}
}

export default ListItem;