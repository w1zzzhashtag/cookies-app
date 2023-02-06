import React from 'react';
import * as styles from './Header.module.scss'
import {Link} from "gatsby";
import {StaticImage} from 'gatsby-plugin-image'
import {Container, Search} from "../index";

const Header = () => {
    return (
        <header className={styles.header}>
            <Container className={styles.container}>
                <div className={styles.content}>
                    <Link to='/'>
                        <StaticImage className={styles.logo} src='./../../assets/images/logo.png' alt='Анаит'  />
                    </Link>
                    <div className={styles.nav}>
                        <button className={styles.nav__catalog}>
                            <div className={styles.nav__catalog__burger}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <span className={styles.nav__catalog__item}>Каталог</span>
                        </button>
                        <div className={styles.nav__list}>
                            <Link to='/company' className={styles.nav__list__item}>О Компании</Link>
                            <Link to='/career' className={styles.nav__list__item}>Карьера</Link>
                            <Link to='/contacts' className={styles.nav__list__item}>Контакты</Link>
                        </div>
                    </div>
                </div>

                <Search/>
            </Container>
        </header>
    );
};

export default Header;