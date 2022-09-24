import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    // console.log(props.addToCart)
    const {name,img,price,ratings,category,} = props.product;
    const {addToCart} = props
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='paragraph'>
           <p className='p'>{name}</p>
              <p><small>Category : {category}</small></p>
              <p><small>Price : ${price}</small></p>
              <p><small>Rating : {ratings}</small></p>
           </div>
           <button onClick={()=>addToCart(props.product)} className='btn-cart'>
            <h3>Add To Cart</h3>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;