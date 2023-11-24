
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Shop from './Pages/Shop'
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product'
import Footer from './Components/Footer/Footer';
import mens_banner from './Components/Asserts/banner_mens.png'
import womens_banner from './Components/Asserts/banner_women.png'
import kids_banner from './Components/Asserts/banner_kids.png'
import Login from './Pages/Login';
function App() {
  return (

    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Shop />} />
        <Route exact path='/mens' element={<ShopCategory banner={mens_banner} category="men"/>}/>
        <Route exact path='/womens' element={<ShopCategory banner={womens_banner} category="women"/>} />
        <Route exact path='/kids' element={<ShopCategory banner={kids_banner} category="kid"/>} />
        <Route exact path='/product' element={<Product/>}>
          <Route exact path=':productId' element={<Product/>}/>
        </Route>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route path='/loginsignup' element={<LoginSignup />}/>
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>
    </Router>
    
  );
}

export default App;
