import React, {memo} from 'react';
import cn from 'classnames'
import * as styles from './Button.module.scss'
import {Link} from "gatsby";

const Button = ({children, to, className, ...buttonProps}) => {
    const defaultProps = {
        className: cn(styles.button, className),
        ...buttonProps
    }

    const button = (
        <button {...defaultProps}>
            {children}
        </button>
    )

    const link = (
        <Link to={to} {...defaultProps}>
            {children}
        </Link>
    )

    return to ? link : button;
};

export default memo(Button);