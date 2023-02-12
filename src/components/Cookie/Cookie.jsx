import React from 'react';
import cn from 'classnames'
import {StaticImage} from "gatsby-plugin-image";
import * as styles from './Cookie.module.scss'

const Cookie = ({position}) => {
    return (
        <StaticImage src='./../../assets/images/cookie.png' alt='cookies' className={cn(styles.cookie, styles[position])}/>
    );
};

export default Cookie;