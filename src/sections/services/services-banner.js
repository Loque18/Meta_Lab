/* eslint-disable jsx-a11y/media-has-caption */

import Link from 'next/link';
import styles from './styles.module.scss';

const { root } = styles;

const ServicesBanner = () => {
    return (
        <section className={root}>
            <div className="container px-2" style={{ height: '100%' }}>
                <div className="columns is-vcentered" style={{ height: '100%' }}>
                    <div className="column is-7">
                        <h1 className="title is-big has-text-blue  mb-3 has-text-centered-mobile ignore-font is-uppercase">
                            We’ve got your back!
                        </h1>
                        <p className="has-text-blue is-size-4 has-text-centered-mobile" style={{ fontWeight: '500' }}>
                            Our full spectrum of services will help propel your business and establish yourselves as a
                            leading force in your field.
                        </p>
                        <br />
                        <div className="has-text-centered-mobile">
                            <Link href="contact">
                                <a className="button gra is-gra1 pr-5 pl-5 has-border-radius-14 px-6" href="contact">
                                    <b>Get noticed as a market leader</b>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="column">
                        <video autoPlay muted loop>
                            <source src="/videos/96502-web-30.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesBanner;
