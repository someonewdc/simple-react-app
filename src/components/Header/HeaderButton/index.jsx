import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './HeaderButton.module.css'

const HeaderButton = ({ exact, to, children, clickHandler, activeBlocked }) => { 
  return (
    <NavLink 
      activeClassName={activeBlocked ? null : classes.active} 
      exact={exact} 
      to={to}
      className={classes.link}
      onClick={clickHandler}
    >
      {children}
    </NavLink>
  )
}

export default HeaderButton
