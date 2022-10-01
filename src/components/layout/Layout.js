import React from 'react'
import { useSelector } from 'react-redux';
import Routers from '../../routes/Routers'
import Carts from '../../UI/Carts';

import Footer from '../footer/Footer'
import Header from '../header/Header'



export default function Layout() {

const showCart = useSelector(state => state.cartUI.cartIsVisiable);


  return (
    <div>
      <Header />

      {showCart && <Carts />}
 
      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  );
}

