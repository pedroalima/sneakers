import '../styles/components/carousel.sass'

import productImage1 from '../images/image-product-1.jpg';
import productImage2 from '../images/image-product-2.jpg';
import productImage3 from '../images/image-product-3.jpg';
import productImage4 from '../images/image-product-4.jpg';
import arrowIconPrevious from '../images/icon-previous.svg';
import arrowIconNext from '../images/icon-next.svg';

function Carousel() {
  const productArray = [productImage1, productImage2, productImage3, productImage4];

  let index = 0

  function toggleSectionsNext(e) {
    index++
    if (index > productArray.length - 1) {
        index = 0;
    }
    
    const image = e.target.parentNode.parentNode.children[1];
    image.setAttribute("src", productArray[index]);
  }

  function toggleSectionsPrevious(e) {
    index--
    if (index < 0) {
        index = productArray.length -1;
    }
    
    const image = e.target.parentNode.parentNode.children[1];
    image.setAttribute("src", productArray[index]);
  }

  return (
    <div className='carousel'>
      <button onClick={toggleSectionsPrevious} className='button'>
        <img className='button_image' src={arrowIconPrevious} alt="" />
      </button>
      <img className='image' src={productArray[0]} alt="Image sneakers" />
      <button onClick={toggleSectionsNext} className='button'>
        <img className='button_image' src={arrowIconNext} alt="" />
      </button>
    </div>
  )
}

export default Carousel