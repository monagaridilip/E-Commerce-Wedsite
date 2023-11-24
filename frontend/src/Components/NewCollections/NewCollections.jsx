import React from 'react'
import './NewCollections.css'
import new_collections from '../Asserts/new_collections'
import Item from '../Item/Item'

const NewCollections = (props) => {
  return (

    <div className='container newcollections'>
       <h2>{props.heading}</h2>
        <hr className='hrtag'/>
        <div className="newcollections-item">
        {new_collections.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
        </div>
    </div>
  )
}

export default NewCollections
