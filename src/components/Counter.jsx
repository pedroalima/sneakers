import PropTypes from 'prop-types'

function Counter({iconPlus, counter, iconMinus, onClickBack, onClickNext}) {
  return (
    <div className='description_container_counter'>
        <button onClick={onClickBack} className='minus'>
            <img src={iconMinus} alt="Icon minus" />
        </button>
        <span className='counter'>{counter}</span>
        <button onClick={onClickNext} className='plus'>
            <img src={iconPlus} alt="Icon plus" />
        </button>
    </div>
  )
}

Counter.propTypes = {
    iconPlus: PropTypes.string.isRequired,
    iconMinus: PropTypes.string.isRequired,
    counter: PropTypes.number.isRequired,
    onClickBack: PropTypes.any,
    onClickNext: PropTypes.any,
}

export default Counter