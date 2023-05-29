import { useState } from 'react';
import '../styles/components/cart.sass';

import productThumbnail1 from '../images/image-product-1-thumbnail.jpg';
import iconDelete from '../images/icon-delete.svg'

function Cart() {
    const [ statusCart ] = useState(true);

    const EmptyContent = () => {
        return (
            <div className='container_cart_content_empty'>
                <span>Your cart is empty.</span>
            </div>
        )
    }

    const Content = () => {
        return (
            <div className='container_cart_content'>
                <div className='container_cart_content_product'>
                    <img className='container_cart_content_product_thumb' src={productThumbnail1} alt="Thumbnail" />
                    <h2 className='container_cart_content_product_title'>Fall Limited Edition Sneakers</h2>
                    <div className='container_cart_content_product_info'>
                        <span className='container_cart_content_product_info_price'>$125.00 x 3 <span className='container_cart_content_product_info_value'>$375.00</span></span>
                    </div>
                    <button className='container_cart_content_product_button'>
                        <img className='container_cart_content_product_button_delete' src={iconDelete} alt="" />
                    </button>
                    
                </div>
                <button className='container_cart_content_button'>Checkout</button>
            </div>
        )
    }

    return (
        <div className="container_cart">
            <div className='container_cart_header'>
                <span>Cart</span>
            </div>
            {!statusCart ? <EmptyContent/> : <Content/>}
        </div>
    )
}

export default Cart