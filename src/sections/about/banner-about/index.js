import Link from 'next/link';
import styles from './styles.module.scss';

const { root } = styles;

const BannerAbout = () => {
    return (
        <section className={root}>
            <div className="container px-2" style={{ height: '100%' }}>
                <div className="columns is-vcentered" style={{ height: '100%' }}>
                    <div className="column is-7">
                        <h1 className="title is-big has-text-blue has-font-airborne  has-text-centered-mobile ignore-font is-uppercase">
                            Metalab&apos;s unique approach to web3
                        </h1>
                        <h1 className="subtitle is-3 has-text-weight-bold has-text-blue has-font-airborne has-text-centered-mobile ignore-font">
                            It&apos;s not about web3,
                            <span className="has-text-cyan is-uppercase"> it&apos;s about YOU</span>
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
