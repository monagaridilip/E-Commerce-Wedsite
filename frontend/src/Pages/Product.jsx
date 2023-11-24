import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import BreadCrum from '../Components/BreadCrum/BreadCrum';
import { ShopContext } from '../Context/ShopContext';
import './CSS/Product.css'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import NewCollections from '../Components/NewCollections/NewCollections'

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  console.log(product)
  return (
    <div className='product'>
      <BreadCrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <NewCollections heading="Related Procucts"/>
    </div>
  )
}

export default Product
