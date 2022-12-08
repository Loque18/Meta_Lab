/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import styles from './style.module.scss';

const { bg, column, bgContainer } = styles;

const HomeBanner = () => {
    const onLoadOrCached = () => {};

    return (
        <section className={bg}>
            <div className={bgContainer}>
                <img src="/Media/hero.png" alt="hero" onLoad={onLoadOrCached} />
                {/* <Image src="/Media/hero.png" alt="hero" layout="fill" objectFit="cover" priority /> */}
            </div>
            <div className="container" style={{ height: '100%' }}>
                <div className="columns is-vcentered is-marginless" style={{ height: '100%' }}>
                    <div className={`column is-6 ${column}`}>
                        <h1 className="title is-big has-text-white has-text-centered-mobile ignore-font">
                            METALAB, YOUR <br />
                            <span className="has-text-cyan ignore-font">GATEWAY TO WEB3</span>
                        </h1>
                        <p className="has-text-lgrey has-text-justified has-text-centered-mobile">
                            Whether you are a corporation looking to get noticed as a market leader, a business
                            searching for innovative ways to raise funds to expand your brand without losing equity or
                            simply an individual with aspirations in the NFT space, Metalab brings the newest Blockchain
                            & web3 technology to your fingertips.
                        </p>
                        <br />
                        <div className="has-text-centered-mobile">
                            <Link href="/services" passHref>
                                <a type="button" className="button gra is-gra1 pr-5 pl-5 has-border-radius-14" href="r">
                                    <b>Our Services</b>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner;
