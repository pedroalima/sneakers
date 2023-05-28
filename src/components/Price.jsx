import PropTypes from 'prop-types';

function Price({price, discount, value}) {
  return (
    <div className='description_container_price'>
        <h2 className='value'>$ {value}.00</h2>
        <span className='discount'>{discount}%</span>
        <span className='price'>$ {price}.00</span>
    </div>
  )
}

Price.propTypes = {
    price: PropTypes.number.isRequired,
    discount: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
}

export default Price