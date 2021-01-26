import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import NotFound from "./NotFound";
import Cart from "../Cart/Cart";
import User from "../User/User";
import Product from "../Product/Product";
import Store from "../Store/Store";
import Login from "../User/Login";

const SwitchContainer = () => {
  return (
    <Switch class="min-h-full">
      <Route exact path="/" component={Home} />
      <Route path="/user" component={User} />
      <Route path="/cart" component={Cart} />
      <Route path="/products" component={Product} />
      <Route path="/stores" component={Store} />
      <Route path="/login" component={Login} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default SwitchContainer;
