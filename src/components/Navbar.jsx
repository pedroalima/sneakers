import { useState } from 'react';
import MobileMenu from './MobileMenu';
import Cart from './Cart';

import '../styles/components/navbar.sass';

import iconMenu from '../images/icon-menu.svg';
import iconLogo from '../images/logo.svg';
import iconCart from '../images/icon-cart.svg';
import imageUser from '../images/image-avatar.png';
import iconClose from '../images/icon-close.svg';

const Navbar = () => {
    const [ menu, setMenu ] = useState(true);
    const [ cart, setCart ] = useState(true);

    const topics = ["Collections", "Men", "Women", "About", "Contact"];
    const topicsList = topics.map((topic, i) => 
        <li key={"topic_" + i}>
            <a href="#">{topic}</a>
        </li>
    );

    function toggleStatusCart() {
        setCart((prev) => {
            if (prev === true) {
                return !prev;
            } else {
                return !prev;
            }
        })
    }

    return (
        <>
            <nav className="navbar">
                <button type='button' className='button' onClick={() => setMenu(false)}>
                    <img className='button_menu' src={iconMenu} alt="Icon menu" />
                </button>
                <h1>
                    <img className='logo' src={iconLogo} alt="logo" />
                </h1>
                <ul className='topics'>
                    {topicsList}
                </ul>
                <img onClick={toggleStatusCart} className='cart' src={iconCart} alt="Icon cart" />
                <img className='user' src={imageUser} alt="Image user" />
            </nav>
            {!menu && <MobileMenu onClick={() => setMenu(true)} image={iconClose} topics={topicsList}/>}
            {!menu && <div className='fade'></div>}
            {!cart && <Cart/>}
        </>
    );
}

export default Navbar