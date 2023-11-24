import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  const [credentials,setCredentials]=useState({name:"",email:"",password:"",cpassword:""})
  let history = useNavigate();
  const onChange = (e) =>{
      setCredentials({...credentials, [e.target.name]: e.target.value})
  }
  const handleSubmit =async (e)=>{
      e.preventDefault();
      if(credentials.password===credentials.cpassword){
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            },
          body: JSON.stringify({ name:credentials.name,email:credentials.email,password:credentials.password }),
        })
        const json = await response.json();
        console.log(json)
        if(json.success){
          //store the token in the local storage
          localStorage.setItem('token',json.authtoken)
          history("/");
          // props.showAlert("Login Successfull","success")
          alert("Login Successfull")
        }
        else{
          // props.showAlert("Login Unsuccessfull enter valid credentials","danger")
          alert("Login Unsuccessfull enter valid credentials")
        } }
        else{
          // props.showAlert("Password should match","danger")
          alert("Password should match")
        }
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h2>Sign Up</h2> 
        <form onSubmit={handleSubmit}>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Enter Your Name' id="name" name='name' value={credentials.name} onChange={onChange}/>
          <input type="email" placeholder='Enter Your Email' id="email" name='email' value={credentials.email} onChange={onChange}/>
          <input type="password" placeholder='Enter Your Password' id="password" name='password' value={credentials.password} onChange={onChange}/>
          <input type="password" placeholder='Confirm Password' id="cpassword" name='cpassword' value={credentials.cpassword} onChange={onChange}/>
        </div>
        {/* <button>Continue</button> */}
        <button type="submit" className="btn btn-danger">Continue</button>
        <p className='loginsignup-login'>Already have an account?<span><Link to="/login">Login</Link></span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        </form>
      </div>
      
    </div>
  )
}

export default LoginSignup
