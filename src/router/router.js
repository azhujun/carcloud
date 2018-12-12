import React from 'react';
import { Route, Switch} from 'react-router-dom';
import { Home, Page} from '../pages';
import TransitionGroup from "react-transition-group/TransitionGroup";

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};
const BasicRoute = () => (
    <Switch>
        <Route exact path="/" children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
            {match && <Home {...rest} />}
            </TransitionGroup>
        )}/>
        <Route path="/home2" children={({ match, ...rest }) => (
            <TransitionGroup component={firstChild}>
            {match && <Page {...rest} />}
            </TransitionGroup>
        )}/>
    </Switch>
);


export default BasicRoute;