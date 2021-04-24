import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Ecommerce from './pages/commerce'
import NotFound from './pages/notfound';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Ecommerce} />
      { /*<Route path="/sobre" component={Sobre} />*/}
      <Route path='*' component={NotFound} />
    </Switch>
  </ BrowserRouter>
);

export default App;
