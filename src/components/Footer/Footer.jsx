import React, {memo} from 'react';
import * as styles from './Footer.module.scss'
import {getRoutePath} from "../../common/utils";
import {Link} from "gatsby";
import {Container} from "../index";
import {PHONE} from "../../common/constants";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container className={styles.footer__container}>
                <div className={styles.footer__content}>
                    <nav className={styles.footer__nav}>
                        <Link to={getRoutePath('catalog')} className={styles.footer__nav__item}>Каталог</Link>
                        <Link to={getRoutePath('company')} className={styles.footer__nav__item}>О Компании</Link>
                        <Link to={getRoutePath('career')} className={styles.footer__nav__item}>Карьера</Link>
                        <Link to={getRoutePath('contacts')} className={styles.footer__nav__item}>Контакты</Link>
                    </nav>
                    <a href={PHONE.href} className={styles.footer__phone}>{PHONE.view}</a>
                </div>
                <div className={styles.footer__copyright}>
                    <p className={styles.footer__copyright__text}>© Анаит 2023</p>
                    <a href="#" className={styles.footer__copyright__link}>Политика в отношении обработки персональных данных</a>
                </div>
            </Container>
        </footer>
    );
};

export default memo(Footer);