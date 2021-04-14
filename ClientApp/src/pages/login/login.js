import React, {useState} from 'react'
import { Link, useHistory } from "react-router-dom";
import { auth } from '../../firebase';


import './login.css'

import Logo from './Amazon.png'

function Login () {
    
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const signIn = e => {
        e.preventDefault()
        
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }
    const register = e => {
        e.preventDefault()
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth)
                if(auth){
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }
    
    return(
        <div className='login'>
            <Link to='/'>
                <img className='login_logo' src={Logo} alt='image' />
            </Link>
            
            <div className='login_container'>
                <h1>Sign-in</h1>
                
                <form>
                    <h5>Email</h5>
                    <input type='text' 
                           value={email}
                           onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Password</h5>
                    <input type='password' 
                           value={password}
                           onChange={e => setPassword(e.target.value)}
                    />
                    
                    <button className='login_signInButton'
                            type='submit'
                            onClick={signIn}
                    >
                        Sign In
                    </button>
                </form>
                
                <p>
                    By signing-in you agree to the AMAZON FAKE CLONE
                    Conditions of use & sale. PLease ee our Privacy 
                    Notice, our Cookies Notice and our Intereese-Based
                    Notice 
                </p>
                
                <button className='login_registerButton'
                        onClick={register}
                >
                    Create Your Amazon Account</button>
                
            </div>
        </div>
    )
}

export default Login