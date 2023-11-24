import React, { useContext } from 'react'
import './CartItem.css'
import remove_icon from '../Asserts/cart_cross_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const CartItem = () => {
    const { all_product, removeToCart, cartItems,getTotalCartPrice} = useContext(ShopContext)
    
    return (
        <>
        <div className='cartitem'>
            <div className="cartitem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total Price</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
            
                if (cartItems[e.id] > 0) {
                    return <div>
                        <div className="cartitem-format cartitem-format-main">
                            <img src={e.image} alt="" className='cartitem-product-icon' />
                            <p>{e.name}</p>
                            <p>RS. {e.new_price}</p>
                            <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                            <p>Rs. {e.new_price * cartItems[e.id]}</p>
                            <img src={remove_icon} className='cartitem-remove-item' alt="" onClick={()=>{removeToCart(e.id)}} />
                        </div>
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-total-items">
                            <p>Sub Total</p>
                            <p>Rs. {getTotalCartPrice()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <h3>Total</h3>
                            <h3>Rs. {getTotalCartPrice()}</h3>
                        </div>
                    </div>
                    {/* <button>Proceed To Check Out</button> */}
                    <button type="button" className="btn btn-danger">Proceed To Check Out</button>
                <div className="cartitems-prococode">
                    <p>Enter the promocode</p>
                    <div className="cartitems-promobox">
                        <input type="text" name="" id="" placeholder='promocode' />
                        {/* <button>Submit</button> */}
                        <button type="button" className="btn btn-danger">Submit</button>

                    </div>
                </div>
                </div>
            </div>

        </div>
        </> 
    )
}

export default CartItem
