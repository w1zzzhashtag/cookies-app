import React, {memo} from 'react';
import * as styles from './Header.module.scss'
import {Link} from "gatsby";
import {StaticImage} from 'gatsby-plugin-image'
import {Container, Search} from "../index";
import {getRoutePath} from "../../common/utils";
import {PHONE} from "../../common/constants";

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
                    <a href={PHONE.href} className={styles.additionalTools__phone}>{PHONE.view}</a>
                    <Search/>
                </div>
            </Container>
        </header>
    );
};

export default memo(Header);