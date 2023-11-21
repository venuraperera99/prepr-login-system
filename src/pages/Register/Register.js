import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Register.css';
import CarouselComponent from '../../components/Carousel/Carousel';
import { auth } from '../../firebase'

import { createUserWithEmailAndPassword } from "firebase/auth"

// Icons
import { CiUser, CiLock } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoCheckmarkDoneOutline } from "react-icons/io5";
import { LuUserSquare2 } from "react-icons/lu";

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [dropdown1, setDropdown1] = useState(''); 
  const [dropdown2, setDropdown2] = useState('');  

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault()
    await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      navigate("/");
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
  };

  return (
    <div className="register-container">
      <CarouselComponent />
      <div className="form-container2 register-form">
        <h2>Register</h2>
        <div className="input-container">
          <label> <LuUserSquare2 /> First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="input-container">
          <label> <LuUserSquare2 /> Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="input-container">
          <label> <CiUser/> User name:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="input-container">
          <label> <CiLock /> Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="password-strength-status">
            <span>Strength:</span>
            <p>Password must include :</p>
            <p>• 8 to 14 characters</p>
            <p>• 1 uppercase letter</p>
            <p>• 1 lowercase letter</p>
            <p>• 1 number</p>
            <p>• 1 special character</p>
            <p>@#$%^&*?_~-()+={}[]|;:'“&lt;&gt;/,.</p>
          </div>
        </div>
        <div className="input-container">
          <label> <IoCheckmarkDoneOutline /> Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        <div className="input-container">
          <label> <MdOutlineEmail /> Email:</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-container">
          <select value={dropdown1} onChange={(e) => setDropdown1(e.target.value)}>
            <option value="option1">User Type</option>
            <option value="option2">Learner</option>
            <option value="option2">Job Seeker/Applicant</option>
            <option value="option2">Employee</option>
            <option value="option2">Founder</option>
            <option value="option2">Educator</option>
            <option value="option2">Mentor</option>
          </select>
        </div>
        <div className="input-container">
          <select value={dropdown2} onChange={(e) => setDropdown2(e.target.value)}>
            <option value="option1">Select Language</option>
            <option value="option2">English</option>
            <option value="option2">French</option>
          </select>
        </div>
        <div className="button-container">
          <button type="button" onClick={handleRegister}>
            Register
          </button>
          <div className="social-buttons-container">
            <button>Continue with Microsoft</button>
            <button>Continue with LinkedIn</button>
            <button>Continue with Google</button>
            <button>Continue with Apple</button>
            <button>Continue with Magnet</button>
          </div>
          <div className="signup-container">
            <p>Already have an account?</p>
            <Link to="/">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;