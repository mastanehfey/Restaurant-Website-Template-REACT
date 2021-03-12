import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Wishlist from './pages/Wishlist'
import NotFound from './components/NotFound'
import MenuPage from './pages/MenuPage'
import DetailPage from './pages/DetailPage'
import CartPage from './components/cart/CartPage'
import Checkout from './components/cart/Checkout'
export default function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/menu/:category/' component={MenuPage} />
      <Route path='/detail/:name/:size/:crust' component={DetailPage} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/wishlist' component={Wishlist} />
      <Route path='/cart' component={CartPage} />
      <Route path='/checkout' component={Checkout} />
      <Route path='/' component={NotFound} />
    </Switch>
    <Footer/>
    </>
  )
}

