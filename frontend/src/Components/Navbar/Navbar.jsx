import React, { useContext} from 'react'
import logo from '../Asserts/logo.png'
import cart_png from '../Asserts/cart_icon.png'
import './Navbar.css'
import { Link,useLocation, useNavigate } from "react-router-dom";
import { ShopContext } from '../../Context/ShopContext'



const Navbar = () => {
    // const [menu, setMenu] = useState("Shop")
    const { getTotalCartItems } = useContext(ShopContext)
    let location = useLocation();
    let navigate = useNavigate();
   
    const handleLogout =()=>{
      
        localStorage.removeItem('token')
        navigate("/login")
      }

      const handleBtn=(e)=>{
        e.preventDefault();
        navigate("/login")
        
        if(localStorage.getItem('token')){
          navigate("/")
        }
        else{
            alert("Required Login")
        }
      }
      const handleBtnShop=(e)=>{
        e.preventDefault();
        navigate("/login")
        if(localStorage.getItem('token')){
          navigate("/")
        }
        else{
            alert("Required Login")
        }
      }
      // const handleBtnMens=(e)=>{
      //   e.preventDefault();
      //   navigate("/login")
      //   if(localStorage.getItem('token')){
      //     navigate("/mens")
      //   }
      //   else{
      //       alert("Required Login")
      //   }
      // }
      // const handleBtnwomens=(e)=>{
      //   e.preventDefault();
      //   navigate("/login")
      //   if(localStorage.getItem('token')){
      //     navigate("/womens")
      //   }
      //   else{
      //       alert("Required Login")
      //   }
      // }
      // const handleBtnkids=(e)=>{
      //   e.preventDefault();
      //   navigate("/login")
      //   if(localStorage.getItem('token')){
      //     navigate("/kids")
      //   }
      //   else{
      //       alert("Required Login")
      //   }
      // }
      const handleBtnCart=(e)=>{
        e.preventDefault();
        navigate("/login")
        if(localStorage.getItem('token')){
          navigate("/cart")
        }
        else{
            alert("Required Login")
        }
      }
    return (
        <>
            <nav className="navbar navbar-expand-lg  fixed-top">
                <div className="container-fluid container">
                    <img src={logo} alt="logo" />
                    <Link className="navbar-brand" to="/" onClick={handleBtn}>AgesStore </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <Link   className={`nav-link ${location.pathname === "/"?"active":""}`} aria-current="page" to="/"  >Shop </Link>
                            </li>
                            <li className="nav-item">
                                <Link   className={`nav-link ${location.pathname === "/mens"?"active":""}`} aria-current="page" to="/mens" >Mens </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === "/womens"?"active":""}`} to="/womens"  >Womens </Link></li>
                            <li className="nav-item">
                                <Link    className={`nav-link ${location.pathname === "/kids"?"active":""}`} to="/kids" >Kids </Link></li>

                        </ul>
                        {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                            <Link to="/loginsignup"><button type="button" className="btn btn-danger mx-2" >Sign Up</button></Link>
                        </form> : <button className="btn btn-danger mx-1" onClick={handleLogout}>Logout</button>}
                        <Link to="/cart"><img src={cart_png} alt="cart" className='mx-2'onClick={handleBtnCart} /></Link>
                        <div className='nav-cart-count'>{getTotalCartItems()}</div>

                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar
