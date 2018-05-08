import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/'>Burguer Builder</NavigationItem>
      {props.isAuthenticaded ?
        <NavigationItem link='/orders'>Orders</NavigationItem> :
        null}
      {props.isAuthenticaded ?
        <NavigationItem link='/logout'>Logout</NavigationItem> :
        <NavigationItem link='/auth'>Authenticate</NavigationItem>}
    </ul>
  )
};

export default navigationItems;