import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import Homepage from './pages/homepage/home.component.jsx';

const HatsPage = () =>(
  <div>
    <h1> HATS</h1>
  </div>
)
const Jacketpage = () =>(
  <div>
    <h1> Jacketpage </h1>
  </div>
)
const Sneakerspage = () =>(
  <div>
    <h1> sneakers Page </h1>
  </div>
)
const Womenspage = () =>(
  <div>
    <h1> womens Page </h1>
  </div>
)
const Menspage = () =>(
  <div>
    <h1> mens Page </h1>
  </div>
)
function App() {
  return (
    <div className="homepage">
      <Route exact path='/' component={Homepage} />
      <Route path='/hats' component={HatsPage} />
      <Route path='/jackets' component={Jacketpage} />
      <Route path='/sneakers' component={Sneakerspage} />
      <Route path='/womens' component={Womenspage} />
      <Route path='/mens' component={Menspage} />
     
    </div>
  );
}

export default App;
