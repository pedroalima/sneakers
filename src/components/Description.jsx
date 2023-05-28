import Price from './Price';
import Counter from './Counter'

import '../styles/components/description.sass'

import iconPlus from '../images/icon-plus.svg';
import iconMinus from '../images/icon-minus.svg';
import iconCart from '../images/icon-cart.svg';

function Description() {
    const price = 250;
    const discount = 0.5;
    const value = price * discount;

    return (
        <section className='description'>
            <h3 className='description_company'>Sneaker Company</h3>
            <h2 className='description_title'>Fall Limited Edition Sneakers</h2>
            <p className='description_info'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
            <Price value={value} discount={discount * 100} price={price}/>
            <Counter counter={0} iconPlus = {iconPlus} iconMinus = {iconMinus}/>
            <button className='description_button'>
                <img className='icon' src={iconCart} alt="Icon shop cart" />
                <span className='text'>Add to cart</span>
            </button>
        </section>
    )
}

export default Description