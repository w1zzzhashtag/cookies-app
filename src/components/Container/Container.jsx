import React, {memo} from 'react';
import cn from 'classnames'
import * as styles from './Container.module.scss'

const Container = ({children, className = ''}) => {
    return (
        <div className={cn(styles.container, className)}>
            {children}
        </div>
    );
};

export default memo(Container);