/* eslint-disable jsx-a11y/media-has-caption */
import dataServices from 'src/components/commons/servicesData/services';

import styles from './styles.module.scss';

const { video, interval } = styles;

const ServicesBanner = () => {
    return (
        <section>
            <div className="container px-2 py-8">
                <div className="columns is-vcentered">
                    <div className="column">
                        <h1 className="title has-text-blue is-1 mb-3">We’ ve got your back!</h1>
                        <p className="has-text-blue is-size-4" style={{ fontWeight: '500' }}>
                            Metalab provides full spectrum of services to help <br /> you move into the web3 space
                            seamlessly.
                        </p>
                        <br />
                        <button className="button is-gra1" type="button">
                            <b>Let&apos;s chat</b>
                        </button>
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
