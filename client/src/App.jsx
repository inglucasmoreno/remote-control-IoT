import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Usuarios from './pages/Usuarios';

// Redux
import AuthState from './context/authentication/authState';

function App() {
  return (
    <AuthState>
      <Router>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/usuarios' component={Usuarios}/>
        </Switch>
      </Router>
    </AuthState>
  )
}

export default App;
