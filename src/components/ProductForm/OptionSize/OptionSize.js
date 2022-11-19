import shortid from "shortid";
import styles from './OptionSize.module.scss';
import PropTypes from 'prop-types';

const OptionSize = ({sizes, currentSize, setCurrentSize}) => {
  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {sizes.map((size) => (
          <li key={shortid()}>
            <button
              onClick={() => {
                setCurrentSize(size.name);
              }}
              type="button"
              className={size.name === currentSize && styles.active}
            >
              {size.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

OptionSize.propTypes = {
    sizes: PropTypes.array.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired
}

export default OptionSize;
