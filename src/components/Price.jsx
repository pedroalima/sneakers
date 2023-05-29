import PropTypes from 'prop-types';

function Price({price, discount, value}) {
  return (
    <div className='description_container_price'>
        <h2 className='value'>$ {value}</h2>
        <span className='discount'>{discount}</span>
        <span className='price'>$ {price}</span>
    </div>
  )
}

Price.propTypes = {
    price: PropTypes.string.isRequired,
    discount: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
}

export default Price