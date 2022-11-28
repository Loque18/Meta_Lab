import Link from 'next/link';
import styles from './styles.module.scss';

const { video, root, VideoImg } = styles;

const BannerAbout = () => {
    return (
        <section className={root}>
            <div className="container px-2 py-8">
                <div className="columns is-vcentered">
                    <div className="column">
                        <h1 className="title has-text-blue has-font-airborne is-1 mb-3 has-text-centered-mobile">
                            MetaLab is one of the <span className="has-text-cyan">top world Learders</span> of Web3
                            technology.
                        </h1>

                        <br />
                        <div className="has-text-centered-mobile">
                            <Link href='contact'>
                                <a className="button gra is-gra1 pr-5 pl-5 has-border-radius-14 px-6" href="contact">
                                    <b>Learn How</b>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className="column flex justify-content-center">
                        <div className={` has-bga-cyan ${video}`} style={{ width: '95%' }}>
                            <video autoPlay muted loop>
                                <source src="/videos/groupWorking.mp4" className={`${VideoImg}`} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerAbout;
