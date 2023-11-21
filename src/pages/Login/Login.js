// src/components/Login.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Login.css';
import CarouselComponent from '../../components/Carousel/Carousel';
import { CiUser } from "react-icons/ci";
import {  signInWithEmailAndPassword   } from 'firebase/auth';


const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/home");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
  };

  return (
    <div className="login-container">
      <CarouselComponent />
      <div className="form-container">
        <h2>Login</h2>
        <div className="input-container">
          <label> <CiUser /> User name or email:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Link>Forgot Password?</Link>
        </div>
        <div className="button-container">
          <button type="button" onClick={handleLogin}>
            Log in
          </button>
          <div className="social-buttons-container">
            {/* Social login buttons */}
            <button>Continue with Microsoft</button>
            <button>Continue with LinkedIn</button>
            <button>Continue with Google</button>
            <button>Continue with Apple</button>
            <button>Continue with Magnet</button>
          </div>
          <div className="signup-container">
            <p>Don't have an account?</p>
            <Link to="/register">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
