import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/home/home';
import Checkout from './pages/checkout/checkout' 
import Login from "./pages/login/login";
import {useStateValue} from "./StateProvider";
import {auth} from "./firebase";
import Header from "./components/header/header";

import './custom.css'

const App = () => {
    
    const [{}, dispatch] = useStateValue();
    
    useEffect(() => {
        auth
            .onAuthStateChanged(authUser => {
            console.log("The user is >>>>>>", authUser);
            
            if(authUser) {
                
                dispatch({
                    type: 'SET_USER',
                    user: authUser,
                })
            } 
            else {
                dispatch({
                    type: 'SET_USER',
                    user: null,
                })
            }
        })
    },[])
    
    return (
        <Layout>
            <Switch>
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
            </Switch>
        </Layout>
    )
}

export default App;