import styles from './Button.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = ({children, className}) => {
    return (<button className={clsx(styles.button, className && className)}>{children}</button>);
};

Button.propTypes = {
    children: PropTypes.any.isRequired,
    className: PropTypes.string
}

export default Button;