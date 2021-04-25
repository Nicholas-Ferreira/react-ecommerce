import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import SingIn from './pages/Auth/SingIn'
import SingUp from './pages/Auth/singUp'
import Ecommerce from './pages/commerce'
import Checkout from './pages/checkout'
import NotFound from './pages/notfound';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Ecommerce} />
      <Route path="/checkout" component={Checkout} />
      <Route path='/singin' component={SingIn} />
      <Route path='/singup' component={SingUp} />
      <Route path='*' component={NotFound} />
    </Switch>
  </ BrowserRouter>
);

export default App;
