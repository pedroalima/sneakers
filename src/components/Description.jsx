import { useState } from 'react'
import Price from './Price';
import Counter from './Counter';

import '../styles/components/description.sass';

import iconPlus from '../images/icon-plus.svg';
import iconMinus from '../images/icon-minus.svg';
import iconCartWhite from '../images/icon-cart-white.svg';

const product = {
    company: "Sneaker Company",
    title: "Fall Limited Edition Sneakers",
    description: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: "250.00",
    discount: "50%",
    value: "125.00",
}

function Description() {
    const [counter, setCounter] = useState(0);
    
    const goBack = () => {
        setCounter((prev) => {
            if(counter > 0) {
                return prev - 1;
            } else {
                return prev;
            }
        })
    };

    const goToNext = () => {
        setCounter((prev) => {
            return prev + 1;
        })
    };

    return (
        <section className='description'>
            <h3 className='description_company'>{product.company}</h3>
            <h2 className='description_title'>{product.title}</h2>
            <p className='description_info'>{product.description}</p>
            <Price value={product.value} discount={product.discount} price={product.price}/>
            <Counter onClickNext={goToNext} onClickBack={goBack} counter={counter} iconPlus = {iconPlus} iconMinus = {iconMinus}/>
            <button className='description_button'>
                <img className='icon' src={iconCartWhite} alt="Icon shop cart" />
                <span className='text'>Add to cart</span>
            </button>
        </section>
    )
}

export default Description