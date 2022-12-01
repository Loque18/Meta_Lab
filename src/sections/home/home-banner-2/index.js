/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from './styles.module.scss';

const { root, imgContainer, link } = styles;

const HomeBanner2 = () => {
    return (
        <section className={`${root} has-bg-gra2`}>
            <div className={`${imgContainer} is-hidden-mobile`}>
                <img src="/Media/hand-phone.webp" alt="" />
            </div>
            <div className="container px-5" style={{ height: '100%' }}>
                <div className="columns" style={{ height: '100%' }}>
                    <div className="column is-6 flex flex-column justify-content-center">
                        <h1 className="title is-big is-2 has-text-lgrey has-text-centered-mobile ignore-font">
                            SHIFT YOUR BUSINESS PARADIGM{' '}
                            <span className="has-text-cyan ignore-font">AND INNOVATE TODAY</span>
                        </h1>
                        <p className="has-text-lgrey has-text-justified mb-2">
                            We assist you in transforming your creative ideas into competitive, market-ready solutions
                            thanks to our 10 years of experience in business strategies, web development, brand
                            identity/design, and IT solutions.
                        </p>

                        <Link href="/about" passHref>
                            <a className={`has-text-lgrey is-size-7 ${link}`} href="r">
                                {'>'} Learn more about MetaLab
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner2;
