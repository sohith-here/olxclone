import React, { useState } from 'react';
import Signup from '../Signup/Signup';
import Logo from '../../olx-logo.png';
import './Login.css';
import { useContext } from 'react';
import { FirebaseContext } from '../../firebase/firebaseContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Login() {
  const {firebase}=useContext(FirebaseContext)
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const history=useHistory()
  const handleLogin=(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      alert('Logged In');
      history.push("/")
    }).catch((error)=>{
      alert(error.message)
    })
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email} onChange={(e)=>setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password} onChange={(e)=>setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
       
        </form>
        <a href='/signup'>Signup</a>
      </div>
    </div>
  );
}

export default Login;
