import React from 'react';
import Login from './pages/Login';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import PrivateRoute from './components/ProtectedRoute';
import ProfileContainer from './containers/ProfileContainer';
import NewsContainer from './containers/NewsContainer';
import Information from './pages/Information';

function App() { 
  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth="lg">
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/news" component={NewsContainer}/>
          <PrivateRoute
            component={ProfileContainer}
            path="/profile"
          />
          <Route exact path="/" component={Information}/>
          <Redirect from="*" to="/" />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
