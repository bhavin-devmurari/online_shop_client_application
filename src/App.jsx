import React from 'react';
import { useSelector } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/homepage/home.page';
import ProductListPage from './pages/product-list-page/product-list.page';
import ProductDescriptionPage from './pages/product-description-page/product-description.page';
import RegisterPage from './pages/register-page/register.page';
import LoginPage from './pages/login-page/login.page';
import CartPage from './pages/cart-page/cart.page';
import SuccessPage from './pages/success-page/success.page';

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  console.log('App user :=> ', user);
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      {/* /products/women OR products/tshirts  */}
      <Route path="/products/:category" component={ProductListPage} />
      <Route path="/product/:id" component={ProductDescriptionPage} />
      <Route path="/cart" component={CartPage} />
      <Route path="/success" component={SuccessPage} />
      <Route
        path="/login"
        render={() => (user ? <Redirect to="/" /> : <LoginPage />)}
      />
      <Route
        path="/register"
        render={() => (user ? <Redirect to="/" /> : <RegisterPage />)}
      />
    </Switch>
  );
};

export default App;
