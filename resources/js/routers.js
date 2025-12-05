import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function Routers() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/add" component={ProductForm} />
        <Route path="/edit/:id" component={ProductForm} />
      </Switch>
    </Router>
  );
}

export default Routers;
