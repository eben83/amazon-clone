import React, { Component } from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './pages/home/home';
import Checkout from './pages/checkout/checkout' 
import Login from "./pages/login/login";

import './custom.css'
import Header from "./components/header/header";

const App = () => {
    return (
        <Layout>
            <switch>
                <Route path='/login'>
                    <Login/>
                </Route>
                <Route exact path='/checkout' >
                    <Header/>
                    <Checkout/>
                </Route>
                <Route exact path='/' >
                    <Header/>
                    <Home/>
                </Route>
            </switch>
        </Layout>
    )
}

export default App;