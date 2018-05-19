import { Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './Home';
import { Product } from './Product';
import { Products } from './Products';
import { Categories } from './Categories';
import { Category } from './Category';
import { NoFound } from './NoFound';
import { Login } from './Login';
import { Register } from './Register';
import { Success } from './Success';

export const PublicPages = () => (

  <Switch>
    <Route exact path="/" component={Home} />

    <Route exact path="/Home" component={Home} />

    <Route exact path="/Shop" component={Categories} />

    <Route exact path="/Shop/:category" component={Category} />

    <Route exact path="/Products" component={Products} />

    <Route exact path="/Products/:product&:category" component={Product} />

    <Route exact path="/login" component={Login} />

    <Route exact path="/registration" component={Register} />

    <Route exact path="/Success" component={Success} />

    <Route component={NoFound} />
  </Switch>
);
