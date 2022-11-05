import React from 'react';
import './review.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Review = ({product,removeProduct}) => {
    const {_id,img,name,shipping,price} = product;

    return (
        <div className='main'>
            <div className='image-container'>
                <img src={img} alt="" />
            </div>

            <div className='product-container'>

               <div className='per-product'>
                <h3>{name}</h3>
                <b>Price : ${price}</b>
                <p><small>Shipping : {shipping}</small></p>
              </div>
              <div className='btn-container'>
                <button onClick={()=>removeProduct(_id)} className='button'> <FontAwesomeIcon className='fontAwesome-btn' icon={faTrashCan}></FontAwesomeIcon></button>
               </div>

            </div>
        </div>
    );
};

export default Review;