import React from "react";
import { createPortal } from "react-dom";
import classnames from "classnames";
import './index.css';

const rootEle = document.body;

/**
 * show: 这个属性通过切换类名改变样式控制组件控制弹层的出现/隐藏
 * onSwitch: 通过传递函数，给予弹出层自我切换的方法
 * children: react组件自带属性,获取组件的开始和结束标记之间的内容
 */

export default ({ show, onSwitch, children }) =>
  createPortal(
    <div
      className={classnames("modal-alert", { "show": show })}
      onClick={onSwitch}
    >
      {children}
    </div>,
    rootEle
  );