import React from 'react'
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import classes from './HeaderButton.module.css'

const HeaderButton = ({ exact, to, children, clickHandler }) => { 
  return (
    <NavLink 
      activeClassName={classes.active} 
      exact={exact} 
      to={to}
      className={classes.link}
    >
      <Button 
        onClick={clickHandler}
        color="inherit"
      >
        {children}
      </Button>
    </NavLink>
  )
}

export default HeaderButton
