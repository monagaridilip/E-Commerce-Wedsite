
import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './CSS/LoginSignup.css'
// import { Link } from 'react-router-dom'

const Login = () => {
    const [credentials,setCredentials]=useState({email:"",password:""})
    let history = useNavigate();

    const onChange = (e) =>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    const handleSubmit =async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              },
            body: JSON.stringify({ email:credentials.email,password:credentials.password }),
          })
          const json = await response.json();
          console.log(json)
          if(json.success){
            //store the token in the local storage
            localStorage.setItem('token',json.authtoken)
            // props.showAlert("Login Successfull","success")
            alert("Login Successfull")
            history("/");
          }
          else{
            // props.showAlert("Login Unsuccessfull enter valid credentials","danger")
            alert("Login Unsuccessfull enter valid credentials")
          } 
    }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h2>Login</h2> 
        <form onSubmit={handleSubmit}>
        <div className="loginsignup-fields">
          
          <input type="email" placeholder='Enter Your Email' id="email" name='email' value={credentials.email} onChange={onChange}/>
          <input type="password" placeholder='Enter Your Password' id="password" name='password' value={credentials.password} onChange={onChange}/>
        </div>
        {/* <button>Continue</button> */}
       
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <button type="submit" className="btn btn-danger">Continue</button>
        </form>
      </div>
      
    </div>
  )
}

export default Login
