/* eslint-disable jsx-a11y/media-has-caption */

import Link from 'next/link';
import styles from './styles.module.scss';

const { video } = styles;

const ServicesBanner = () => {
    return (
        <section>
            <div className="container px-2 py-8">
                <div className="columns is-vcentered">
                    <div className="column">
                        <h1 className="title has-text-blue is-1 mb-3 has-text-centered-mobile">
                            We’ve got your back!
                        </h1>
                        <p className="has-text-blue is-size-4 has-text-centered-mobile" style={{ fontWeight: '500' }}>
                            Metalab provides full spectrum of services to help you move into the web3 space seamlessly.
                        </p>
                        <br />
                        <div className="has-text-centered-mobile">
                        <Link href="contact">
                            <button className="button is-gra1 pr-6 pl-6  has-border-radius-16 " type="button">
                                <b>Let&apos;s chat</b>
                            </button>
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
