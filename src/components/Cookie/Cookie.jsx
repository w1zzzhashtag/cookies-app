import React from 'react';
import cn from 'classnames'
import {StaticImage} from "gatsby-plugin-image";
import * as styles from './Cookie.module.scss'

const Cookie = ({position}) => {
    return (
        <div className={cn(styles.cookie, styles[position])}>
            <StaticImage src='./../../assets/images/cookie.png' alt='cookies'/>
        </div>
    );
};

export default Cookie;