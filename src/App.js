import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import News from './pages/News';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import Profile from './pages/Profile';
import PrivateRoute from './components/ProtectedRoute';

function App() { 
  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth="lg">
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/news" component={News}/>
          <PrivateRoute
            component={Profile}
            path="/profile"
          />
          <Route exact path="/" component={Home}/>
          <Redirect from="*" to="/" />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
