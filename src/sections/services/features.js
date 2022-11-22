/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/media-has-caption */
import servicesData from 'src/static/services-data';

import styles from './styles.module.scss';

const { video, interval, textContainer, mb, extend } = styles;

const FeaturesComponent = () => {
    return (
        <section>
            <div className="container px-2 py-8">
                {servicesData.map((item, idx) => (
                    <div className={`columns is-vcentered ${(idx + 1) % 2 === 0 ? interval : ''} ${mb}`} key={item.id}>
                        <div className={`${extend} column`} id={item.divId}>
                            <h1 className="title has-text-blue has-text-centered-mobile">{item.title}</h1>
                            <p
                                className={`has-text-blue has-text-justified ${textContainer}`}
                                style={{ fontWeight: '500', width: '80%' }}
                            >
                                {item.description}
                            </p>
                        </div>

                        <div className="column">
                            <div className={`box has-bga-cyan ${video} `}>
                                {item.img ? (
                                    <img src={item.img} alt="" />
                                ) : (
                                    <video autoPlay muted loop>
                                        <source src={item.video} type="video/mp4" />
                                    </video>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesComponent;
