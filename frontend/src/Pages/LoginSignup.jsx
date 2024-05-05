import React, { useState } from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {

  const [state, setState] = useState('Login');
  const [formData, setFormData] = useState({
    username:"",
    password:"",
    email:"",
  });

  //For updating the details provided by the user
  const changeHandler = (e) =>{
    setFormData({...formData,[e.target.name]:e.target.value})
  };

  //For Login page
  const login = async() =>{
    console.log("Login function got executed.", formData);
    let responseData;
    await fetch("http://localhost:4000/login",{
      method:"POST",
      headers:{
        Accept: 'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>{responseData=data});

    //If response is successful, authorisation token is generated here
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace('/');
    }
    else{
      alert(responseData.errors);
    }
  }

    //For SignUp page
    const signup = async() =>{
    console.log("SignUp function got executed.", formData);
    let responseData;
    await fetch("http://localhost:4000/signup",{
      method:"POST",
      headers:{
        Accept: 'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response)=>response.json()).then((data)=>{responseData=data});

    //If response is successful, authorisation token is generated here
    if(responseData.success){
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace('/');
    }
    else{
      alert(responseData.errors);
    }
  }

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' />:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="text" placeholder='Your email ID'/>
          <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Your Password' />
        </div>
        <button onClick={()=>{
          if(state==="Sign Up") signup();
          else login();
        }}>{state==="Sign Up"?"Sign Up":"Login"}</button>
        {state==="Sign Up"
        ?<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>
        :<p className="loginsignup-login"><span onClick={()=>{setState("Sign Up")}}>Click here</span> to create an account</p>}
        
        <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}
export default LoginSignup
