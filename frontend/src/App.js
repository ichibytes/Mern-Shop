import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Product from './Components/Product';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Register from './Components/Register';
import Profile from './Components/Profile';
import Shipping from './Components/Shipping';
import Payment from './Components/Payment';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Order from './Components/Order';

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={Home} exact />
          <Route path='/product/:id' component={Product} />
          <Route path='/cart/:id?' component={Cart} />
          <Route path='/login' component={Login} />
          <Route path='/profile' component={Profile} />
          <Route path='/register' component={Register} />
          <Route path='/shipping' component={Shipping} />
          <Route path='/payment' component={Payment} />
          <Route path='/placeorder' component={PlaceOrder} />
          <Route path='/order/:id' component={Order} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
