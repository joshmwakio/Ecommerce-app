import React from 'react';
import './App.css';

import {Route} from 'react-router-dom'
import HomePage from './Pages/Homepage/homepage.component'
import ShopPage from './Pages/Shoppage/shoppage.component'


function App() {
  return (
    <div>
      <Route exact path='/' component={HomePage}/>
      <Route exact path='/shop/' component={ShopPage}/>
    </div>
  );
}

export default App;
