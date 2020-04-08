import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import News from './pages/News';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Header from './components/Header/Header';
import Profile from './pages/Profile';
import { connect } from 'react-redux';

function App({ isAuth }) {
  console.log(isAuth);
  
  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth="lg">
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/news" component={News}/>
          <Route path="/profile">
            {isAuth ? <Profile /> : <Redirect to="/login"/>}
          </Route>
          <Route exact path="/" component={Home}/>
          <Redirect from="*" to="/" />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

const mapStateToProps = ({ authForm }) => {
  return {
    isAuth: authForm.isAuth
  }
} 

export default connect(mapStateToProps, null)(App);
