/* eslint-disable jsx-a11y/media-has-caption */

import Link from 'next/link';
import styles from './styles.module.scss';

const { video, root } = styles;

const ServicesBanner = () => {
    return (
        <section className={root}>
            <div className="container px-2 py-8">
                <div className="columns is-vcentered">
                    <div className="column">
                        <h1 className="title has-text-blue is-1 mb-3 has-text-centered-mobile">We’ve got your back!</h1>
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
                        <div className={`box has-bga-cyan ${video} `}>
                            <video autoPlay muted loop>
                                <source src="/videos/96502-web-30.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesBanner;
