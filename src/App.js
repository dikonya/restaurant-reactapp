import './App.css';
import React, { Component } from 'react';
import { Link, Routes, Route, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Delivery from './pages/Delivery/Delivery';
import Breakfast from './pages/Menu/Breakfast/Breakfast';
import Dishes from './pages/Menu/Dishes/Dishes';
import Desserts from './pages/Menu/Desserts/Dessert';
import Drinks from './pages/Menu/Drinks/Drinks';
class App extends Component {
  render() {
    return (
      <div>
        <Navbar expand='lg' className='fixed-top bg-body-tertiary shadow'>
          <Container>
            <Navbar.Brand>
              <Link to='/' className='navbar-brand text-danger d-flex align-items-center'>
                
                <span className='mx-2 lh-1 fw-semibold'>
                  Dikonya
                  <br></br>
                  Restaurant
                </span>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basiv-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
            <NavLink exact to='/' className='nav-link text-uppercase' activeClassName='active'>
              Home
            </NavLink>
            <NavLink to='/menu' className='nav-link text-uppercase' activeClassName='active'>
              Menu
            </NavLink>
            <NavLink to='/about' className='nav-link text-uppercase' activeClassName='active'>
              About
            </NavLink>
            <NavLink to='/contact' className='nav-link text-uppercase' activeClassName='active'>
              Contact
            </NavLink>
            <NavLink to='/delivery' className='nav-link text-uppercase' activeClassName='active'>
              Delivery
            </NavLink>
          </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/delivery' element={<Delivery />} />
          <Route path="/breakfast" element={<Breakfast />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/drinks" element={<Drinks />} />
        
        </Routes>

        
        <Footer />

      </div>
      
    );
  }
}

export default App;