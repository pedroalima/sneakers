import PropTypes from 'prop-types'

function Counter({iconPlus, counter, iconMinus}) {
  return (
    <div className='description_container_counter'>
        <button className='minus'>
            <img src={iconMinus} alt="Icon minus" />
        </button>
        <span className='counter'>{counter}</span>
        <button className='plus'>
            <img src={iconPlus} alt="Icon plus" />
        </button>
    </div>
  )
}

Counter.propTypes = {
    iconPlus: PropTypes.string.isRequired,
    iconMinus: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired,
}

export default Counter