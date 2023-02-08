import React, {memo, useMemo} from 'react';
import cn from 'classnames'
import * as styles from './Title.module.scss';

const Title = ({variant, children, className, ...rest}) => {

    const props = useMemo(() => ({
        className: cn(styles.title, className),
        ...rest
    }), [rest])

    return useMemo(() => {

        switch (variant) {
            case 'h1':
                return <h1 {...props}>{children}</h1>
            case 'h2':
            default:
                return <h2 {...props}>{children}</h2>
            case 'h3':
                return <h3 {...props}>{children}</h3>
            case 'h4':
                return <h4 {...props}>{children}</h4>
            case 'h5':
                return <h5 {...props}>{children}</h5>
            case 'h6':
                return <h6 {...props}>{children}</h6>
        }
    }, [variant, children, props])
};

export default memo(Title);