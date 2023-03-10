import React, {useRef} from "react"
import {Button, Container, Cookie, Layout, Section, Title} from "../components";
import {StaticImage} from "gatsby-plugin-image";
import {getRoutePath} from "../common/utils";
import * as styles from './index.module.scss'
import AdvantageIcon from './../assets/images/advantages-1.svg';

const IndexPage = () => {
    const ref = useRef(null)

    const scrollToNextSection = () => {
        ref.current.scrollIntoView({
            behavior: 'smooth'
        })
    }

    return (
        <Layout>
            <Section className={styles.catalogSection}>
                <Container className={styles.catalogSection__container}>
                    <div className={styles.catalogSection__info}>
                        <Title variant='h1'>Наша продукция</Title>
                        <p className={styles.catalogSection__desc}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Culpa delectus deleniti impedit
                            inventore ipsa nemo odit quae reiciendis repellat sint?</p>
                        <Button to={getRoutePath('catalog')}>Смотреть предложения</Button>
                    </div>
                    <StaticImage
                        className={styles.catalogSection__image}
                        src="./../assets/images/preview-image.png"
                        alt="preview"
                    />
                </Container>

                <button className={styles.catalogSection__arrow} onClick={scrollToNextSection}>
                    <svg className={styles.catalogSection__arrow__svg} version="1.1" viewBox="0 0 15.699 8.707"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                        <polygon
                            points="15.699,3.854 1.914,3.854 5.061,0.707 4.354,0 0,4.354 4.354,8.707 5.061,8 1.914,4.854 15.699,4.854 "/>
                    </svg>
                </button>
            </Section>

            <Section ref={ref} className={styles.advantages}>
                <Container className={styles.advantages__container}>
                    <Title>Наши преимущества</Title>
                    <p className={styles.advantages__subtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Blanditiis, explicabo.
                    </p>
                    <div className={styles.advantages__list}>
                        <div className={styles.advantages__list__item}>
                            <AdvantageIcon className={styles.advantages__list__item__img}/>
                            <p className={styles.advantages__list__item__title}>
                                <span className={styles.strong}>15</span> Lorem ipsum.
                            </p>
                            <p className={styles.advantages__list__item__desc}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, non!
                            </p>
                        </div>
                        <div className={styles.advantages__list__item}>
                            <AdvantageIcon className={styles.advantages__list__item__img}/>
                            <p className={styles.advantages__list__item__title}>
                                <span className={styles.strong}>15</span> Lorem ipsum.
                            </p>
                            <p className={styles.advantages__list__item__desc}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, non!
                            </p>
                        </div>
                        <div className={styles.advantages__list__item}>
                            <AdvantageIcon className={styles.advantages__list__item__img}/>
                            <p className={styles.advantages__list__item__title}>
                                <span className={styles.strong}>15</span> Lorem ipsum.
                            </p>
                            <p className={styles.advantages__list__item__desc}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, non!
                            </p>
                        </div>
                    </div>
                </Container>
                <Cookie position='top' />
                <Cookie position='bottom' />
            </Section>

            <Section className={styles.about}>
                <Container className={styles.about__container}>
                    <StaticImage className={styles.about__img} src='./../assets/images/about-image.png' alt="cooks"/>
                    <div className={styles.about__info}>
                        <Title>О нас</Title>
                        <p className={styles.about__subtitle}>Lorem ipsum dolor.</p>
                        <p className={styles.about__desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Adipisci consectetur dolor eveniet
                            modi officia. Explicabo fugit incidunt inventore magni numquam!
                        </p>
                        <Button to={getRoutePath('company')}>Подробнее</Button>
                    </div>
                </Container>
            </Section>
        </Layout>
    )
}

export default IndexPage

export const Head = () => <title>Главная</title>
