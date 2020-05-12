import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Log_in from '../pages/Log-in.jsx';
import Account from '../pages/Account.jsx';
function App() {
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/"  component={Home}/>
          <Route exact path="/log-in"  component={Log_in}/>
          <Route exact path="/Account"  component={Account}/>
        </Switch>      
    </BrowserRouter>
  );
}
export default App;