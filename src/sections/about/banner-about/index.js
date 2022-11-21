import styles from './styles.module.scss';

const { video, root, columns } = styles;

const BannerAbout = () => {
    return (
        <section className={root}>
            <div className="container px-2 py-8">
                <div className="columns is-vcentered">
                    <div className="column">
                        <h1 className="title has-text-blue is-1 mb-3 has-text-centered-mobile">
                            MetaLab is one of the <span className="has-text-cyan">top world Learders</span> of Web3
                            technology.
                        </h1>

                        <br />
                        <div className="has-text-centered-mobile">
                            <button className="button is-gra1" type="button">
                                <b>Let&apos;s chat</b>
                            </button>
                        </div>
                    </div>

                    <div className="column flex justify-content-center">
                        <div className={` has-bga-cyan ${video}`} style={{ width: '80%' }}>
                            <video autoPlay muted loop>
                                <source src="/videos/groupWorking.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerAbout;