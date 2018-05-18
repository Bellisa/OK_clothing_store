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

    <Route path="/" exact component={Home} />

    <Route path="/Shop" exact component={Categories} />

    <Route path="/Shop/:category" component={Category} />

    <Route path="/Products" exact component={Products} />

    <Route path="/Products/:product&:category" component={Product} />

    <Route path="/login" component={Login} />

    <Route path="/registration" component={Register} />

    <Route path="/Success" exact component={Success} />

    <Redirect to="login" />

    <Route component={NoFound} />
  </Switch>
);
