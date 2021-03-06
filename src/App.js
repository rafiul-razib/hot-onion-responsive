import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Menu from './components/Menu/Menu';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SingleFood from './components/SingleFood/SingleFood';
import useFoods from './components/hooks/useFoods';
import { useState } from 'react';
import Cart from './components/Cart/Cart';

function App() {
  const[menu]= useFoods();
  const[cart, setCart] =useState([])

  const handleAddToCart = food =>{
    const newCart = [...cart, food];
    setCart(newCart);
  }


  return (
    <div className="App">
      <BrowserRouter>
      <Header cart = {cart}></Header>
      <Switch>
        <Route exact path="/">
        <Banner></Banner>
        <Menu menu={menu}></Menu>
        </Route>
        <Route path="/home">
        <Banner></Banner>
        <Menu menu={menu}></Menu>
        </Route>
        <Route path="/details/:foodId">
          <SingleFood handleAddToCart={handleAddToCart}></SingleFood>
        </Route>
        <Route path="/cart">
          <Cart cart={cart}></Cart>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
