import React, {forwardRef, memo} from 'react';
import cn from 'classnames'
import * as styles from './Section.module.scss'

const Section = forwardRef(({children, className, ...rest}, ref) => {
    console.log('rest', rest)
    return (
        <section className={cn(styles.section, className)} ref={ref} {...rest}>
            {children}
        </section>
    );
});

export default memo(Section);