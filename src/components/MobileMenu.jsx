import PropTypes from 'prop-types';

import '../styles/components/mobileMenu.sass';

function MobileMenu({image, topics, onClick}) {
  return (
    <div className='mobile_menu'>
        <button className='mobile_menu__button' onClick={onClick}>
            <img className='mobile_menu__button_image' src={image} alt="Icon close" />
        </button>
        <ul className='mobile_menu__list'>{topics}</ul>
    </div>
  )
}

MobileMenu.propTypes = {
    image: PropTypes.string.isRequired,
    topics: PropTypes.array.isRequired,
    onClick: PropTypes.any.isRequired,
}

export default MobileMenu