import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './components/NavigationBar';
import Home from './components/Home';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Signup from './components/Signup'
import Login from './components/Login'
import Womens from './components/Womens'
import Admin from './components/Admin'
import SideBar from './components/SideBar';
import Men from './components/Men';
import Jewelry from './components/Jewelry';
import Electronics from './components/Electronics';
import UpdateItem from './components/UpdateItem'
import WomenSingleView from './components/WomenSingleView';
import MenSingleView from './components/MenSingleView';
import JewelrySingleView from './components/JewelrySingleView';
import ElectronicSingleView from './components/ElectronicSingleView';
import Sale from './components/Sale';

import "./App.css";

const App = () => {
    return (
        <>
            <Navigation />
            <div className ="app-ontainer">
                <div className="side-bar-container">
                  <SideBar />
                </div>
                <div className="components-container">
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/aa/womens' element={<Womens />} />
                        <Route path='/aa/mens' element={<Men />} />
                        <Route path='/aa/jewelry' element={<Jewelry />} />
                        <Route path='/aa/electronics' element={<Electronics />} />
                        <Route path='/aa/sale' element={<Sale />} />
                        <Route path='/aa/contactus' element={<Contact />} />
                        <Route path='/aa/:id/cart' element={<Cart />} />
                        <Route path='/aa/cart' element={<Cart />} />
                        <Route path='/aa/login' element={<Login />} />
                        <Route path='/aa/signup' element={<Signup />} />
                        <Route path='/aa/admin' element={<Admin />} />
                        <Route path='/aa/adminView/:id' element={<UpdateItem />} />
                        <Route path='/aa/checkout/:id' element={<Cart />} />
                    </Routes>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default App;
