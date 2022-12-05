import Link from 'next/link';
import { useEffect } from 'react';
import styles from './styles.module.scss';

const { root } = styles;

const BannerAbout = () => {
    useEffect(() => {
        const { body } = document;

        body.classList.remove('has-navbar-fixed-top');

        return () => {
            body.classList.add('has-navbar-fixed-top');
        };
    }, []);

    return (
        <section className={root}>
            <div className="container px-2" style={{ height: '100%', paddingTop: '4rem' }}>
                <div className="columns is-vcentered" style={{ height: '100%' }}>
                    <div className="column is-7">
                        <h1 className="title is-big  has-font-airborne  has-text-centered-mobile ignore-font is-uppercase has-text-white">
                            Metalab&apos;s unique approach to web3
                        </h1>
                        <h1 className="subtitle is-3 has-text-weight-bold has-text-cyan has-font-airborne has-text-centered-mobile ignore-font">
                            It&apos;s not about web3, it&apos;s about <span className=" ignore-font"> YOU</span>
                        </h1>

                        <br />
                        <div className="has-text-centered-mobile">
                            <Link href="contact">
                                <a className="button gra is-gra1 pr-5 pl-5 has-border-radius-14 px-5" href="contact">
                                    <b>Learn How</b>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="column flex justify-content-center">
                        <video autoPlay muted loop>
                            <source src="/videos/groupWorking.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerAbout;
