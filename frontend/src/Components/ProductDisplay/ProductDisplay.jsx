import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Asserts/star_icon.png'
import star_icon_dull from '../Asserts/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
    
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-main">
            <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h2>{product.name}</h2>
        <div className="productdisplay-stars">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon_dull} alt="" />
            <p>(30)</p>
        </div>
        <div className="productdisplay-right-prices">
        <div className="productdisplay-right-prices-old">RS. {product.old_price}</div>
        <div className="productdisplay-right-prices-new">RS. {product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, magnam consequatur reprehenderit minima commodi itaque ipsa quibusdam alias quidem hic, rerum aperiam, adipisci quod. Quas impedit quis quae consectetur mollitia?
        </div>
        <div className="productdisplay-right-sizes">
            <h2>Select Sizes</h2>
            <div className="productdisplay-right-sizes-list">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
            </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        <p className="productdisplay-right-category"><span>Category:</span>Women, T-shirts, Crop Top</p>
        <p className="productdisplay-right-category"><span>Tags:</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
