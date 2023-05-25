import '../styles/components/navbar.sass';

import iconMenu from '../images/icon-menu.svg';
import iconLogo from '../images/logo.svg';
import iconCart from '../images/icon-cart.svg';
import imageUser from '../images/image-avatar.png';

const Navbar = () => {

    const topics = ["Collections", "Men", "Women", "About", "Contact"]
    const topicsList = topics.map((topic, i) => <li key={"topic_" + i}><a href="#">{topic}</a></li>);

    return (
        <nav className="navbar">
            <img className='menu' src={iconMenu} alt="Icon menu" />
            <img className='logo' src={iconLogo} alt="logo" />
            <ul className='topics'>{topicsList}</ul>
            <img className='cart' src={iconCart} alt="Icon cart" />
            <img className='user' src={imageUser} alt="Image user" />
        </nav>
    )
}

export default Navbar