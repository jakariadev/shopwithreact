import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';
import Homepage from './pages/homepage/home.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import SignINAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import Header from './components/header/header.component.jsx';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignINAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
