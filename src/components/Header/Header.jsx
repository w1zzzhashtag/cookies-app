import React, {memo} from 'react';
import * as styles from './Header.module.scss'
import {Link} from "gatsby";
import {StaticImage} from 'gatsby-plugin-image'
import {Container, Search} from "../index";
import {getRoutePath} from "../../common/utils";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <div className={styles.content}>
                    <Link to='/'>
                        <StaticImage className={styles.logo} src='./../../assets/images/logo.png' alt='Анаит'/>
                    </Link>
                    <div className={styles.nav}>
                        <div className={styles.nav__list}>
                            <Link to={getRoutePath('catalog')} className={styles.nav__list__item}>Каталог</Link>
                            <Link to={getRoutePath('company')} className={styles.nav__list__item}>О Компании</Link>
                            <Link to={getRoutePath('career')} className={styles.nav__list__item}>Карьера</Link>
                            <Link to={getRoutePath('contacts')} className={styles.nav__list__item}>Контакты</Link>
                        </div>
                    </div>
                </div>

                <div className={styles.additionalTools}>
                    <a href='tel:+79999999999' className={styles.additionalTools__phone}>+7 (999) 999-99-99</a>
                    <Search/>
                </div>
            </Container>
        </header>
    );
};

export default memo(Header);