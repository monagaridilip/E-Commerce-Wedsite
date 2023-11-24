import React, { createContext, useState } from "react";
import all_product from '../Components/Asserts/all_product'

export const ShopContext = createContext(null)

const getDefaultCart =() =>{
    let cart ={}
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) =>{
    const [cartItems,setCartItems] = useState(getDefaultCart)
    
    const addToCart = (productId) =>{
        setCartItems((prev)=>({...prev,[productId]:prev[productId]+1}));
    }
    const removeToCart = (productId) =>{
        setCartItems((prev)=>({...prev,[productId]:prev[productId]-1}))
    }

    const getTotalCartPrice = () =>{
        let totalAmount = 0;
        console.log(cartItems)
        for(const item in cartItems){ 
            if(cartItems[item]>0){
            let productInfo = all_product.find((product)=>product.id === Number(item))
            totalAmount += productInfo.new_price * cartItems[item]
        }
    }
    return totalAmount;
    } 
    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item]
            }
        }
        return totalItem;
    }
    
    const contextValue = {all_product,cartItems,addToCart,removeToCart,getTotalCartPrice,getTotalCartItems}
return(
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
)
}
export default ShopContextProvider;