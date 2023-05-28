import '../styles/components/carousel.sass'

import productImage1 from '../images/image-product-1.jpg';
import productImage2 from '../images/image-product-2.jpg';
import productImage3 from '../images/image-product-3.jpg';
import productImage4 from '../images/image-product-4.jpg';
import productThumbnail1 from '../images/image-product-1-thumbnail.jpg';
import productThumbnail2 from '../images/image-product-2-thumbnail.jpg';
import productThumbnail3 from '../images/image-product-3-thumbnail.jpg';
import productThumbnail4 from '../images/image-product-4-thumbnail.jpg';
import arrowIconPrevious from '../images/icon-previous.svg';
import arrowIconNext from '../images/icon-next.svg';

function Carousel() {
  const productImages = [productImage1, productImage2, productImage3, productImage4];

  let index = 0

  function toggleNextImage(e) {
    index++
    if (index > productImages.length - 1) {
        index = 0;
    }
    
    const image = e.target.parentNode.parentNode.children[1];
    image.setAttribute("src", productImages[index]);
  }

  function togglePreviousImage(e) {
    index--
    if (index < 0) {
        index = productImages.length -1;
    }
    
    const image = e.target.parentNode.parentNode.children[1];
    image.setAttribute("src", productImages[index]);
  }

  const productThumbnails = [productThumbnail1, productThumbnail2, productThumbnail3, productThumbnail4];

  function handleClick(e) {
    const productImage = e.target.parentNode.parentNode.parentNode.parentNode.children[0].children[1];
    const imageId = e.target.id;
    productImage.setAttribute('src', productImages[imageId])
  }

  const productList = productThumbnails.map((thumbnail, i) => (
      <li key={"product_" + i} className='thumbnail_container'>
        <input className='thumbnail_container_input' type="radio" name="thumb" id={"image" + i} />
        <label onClick={handleClick} className='thumbnail_container_label' htmlFor={"image" + i}>
          <img className='thumbnail_container_label_image' id={i} src={thumbnail} alt="Thumbnails" />
        </label>
      </li>
  ))

  return (
    <section className='carousel'>
      <div className='carousel_image'>
        <button onClick={togglePreviousImage} className='button'>
          <img className='button_image' src={arrowIconPrevious} alt="" />
        </button>
        <img className='image' src={productImages[0]} alt="Image sneakers" />
        <button onClick={toggleNextImage} className='button'>
          <img className='button_image' src={arrowIconNext} alt="" />
        </button>
      </div>
      <ul className='carousel_thumbnails'>
        {productList}
      </ul>
    </section>
  )
}

export default Carousel