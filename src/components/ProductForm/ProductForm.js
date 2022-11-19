import styles from "./ProductForm.module.scss";
import Button from "../Button/Button";
import OptionSize from "./OptionSize/OptionSize";
import OptionColor from "./OptionColor/OptionColor";
import PropTypes from 'prop-types';

const ProductForm = ({
  colors,
  sizes,
  submitHandler,
  currentSize,
  currentColor,
  setCurrentSize,
  setCurrentColor,
}) => {


  return (
    <form onSubmit={submitHandler}>
      <OptionSize
        sizes={sizes}
        currentSize={currentSize}
        setCurrentSize={setCurrentSize}
      />
      <OptionColor
        colors={colors}
        currentColor={currentColor}
        setCurrentColor={setCurrentColor}
      />

      <Button className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
  submitHandler: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
}

export default ProductForm;
