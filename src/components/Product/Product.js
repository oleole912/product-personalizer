import { useState } from 'react';
import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = ({id, name, title, basePrice, colors, sizes}) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);

  const getPrice = () => {
    const foundSize = sizes.find(size => size.name === currentSize)
    return basePrice + foundSize.additionalPrice;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('Summary');
    console.log('==============');
    console.log('Name: ', title);
    console.log('Price: ', getPrice());
    console.log('Size: ', currentSize);
    console.log('Color: ', currentColor);
  }

  return (
    <article className={styles.product}>
      <ProductImage title={title} name={name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm sizes={sizes} colors={colors} submitHandler={submitHandler} currentSize={currentSize} currentColor={currentColor} setCurrentSize={setCurrentSize} setCurrentColor={setCurrentColor} />
      </div>
    </article>
  )
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired
}

export default Product;