import React from 'react'
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    opacity: 0.6
  },
  headerBtn: {
    marginRight: '20px',
  },
  active: {
    opacity: 1
  }
}));

const Header = () => {
	const classes = useStyles();

	return (
	<AppBar position="static">
		<Container max-width="lg">
		<Toolbar>			
		<Typography variant="h6" className={classes.title}>

      <NavLink 
        activeClassName={classes.active} 
        exact 
        to="/" 
        className={classes.link}
      >
        <Button color="inherit" className={classes.headerBtn}>
          Home
        </Button>
      </NavLink>

      <NavLink 
        activeClassName={classes.active} 
        to="/profile" 
        className={classes.link}
      >
        <Button color="inherit" className={classes.headerBtn}>
          Profile
        </Button>
      </NavLink>

      <NavLink 
        activeClassName={classes.active} 
        to="/news" 
        className={classes.link}
      >
        <Button color="inherit" >
          News
        </Button>
      </NavLink>
		</Typography>
    <NavLink 
      activeClassName={classes.active} 
      to="/login" 
      className={classes.link}
    >
      <Button color="inherit">
        Login
      </Button>
    </NavLink>
	</Toolbar>
	
			
	</Container>
	</AppBar>
	)
}



export default Header