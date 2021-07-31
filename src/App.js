import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import AddProducts from "./pages/AddProducts";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/products" />} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/products/:id" component={ProductDetails} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/admin/addproduct" component={AddProducts} />

          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
