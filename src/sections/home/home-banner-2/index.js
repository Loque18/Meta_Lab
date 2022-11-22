/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';

const { root, imgContainer } = styles;

const HomeBanner2 = () => {
    return (
        <section className={`${root} has-bg-gra2`}>
            <div className={`${imgContainer} is-hidden-mobile`}>
                <img src="/Media/hand-phone.png" alt="" />
            </div>
            <div className="container px-5">
                <div className="columns">
                    <div className="column is-6">
                        <h1 className="title is-2 has-text-lgrey has-text-centered-mobile">
                            WE TURN IDEAS INTO A
                            <span className="has-text-cyan">
                                <br />
                                COMPETITIVE BUSINESS
                            </span>
                        </h1>
                        <p className="has-text-lgrey has-text-justified mb-2">
                            With over than 10 years of experience in technology, from business strategies to web
                            development and brand design to IT solutions, we help you turn your innovative ideas into
                            competitive market-ready solutions.
                        </p>

                        <a
                            className="has-text-lgrey is-size-7"
                            href="https://example.com"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {'>'} Learn more about MetaLab
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeBanner2;
