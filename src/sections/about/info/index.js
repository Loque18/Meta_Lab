import AboutData from 'src/static/about-data';

import styles from './style.module.scss';

const { textContainer } = styles;

const AboutInfo = () => {
    return (
        <section>
            <div className="container px-5">
                {AboutData.map(item => {
                    return (
                        <div key={item.id} className="mb-8">
                            <h1 className="title at has-text-blue has-text-centered mb-6">
                                <span>{item.title}</span>
                            </h1>
                            <p className={`is-size-5 has-text-centered has-text-justified-mobile ${textContainer}`}>
                                {item.body()}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default AboutInfo;
