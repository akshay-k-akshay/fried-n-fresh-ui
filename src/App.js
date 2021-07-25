import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import HomePage from './pages/HomePage';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Header from './components/Header';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />

          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
