import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import News from './pages/News';
import { BrowserRouter, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth="lg">
        <Route exact path={'/'} component={Home}/>
        <Route exact path={'/login'} component={Login}/>
        <Route exact path={'/news'} component={News}/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
