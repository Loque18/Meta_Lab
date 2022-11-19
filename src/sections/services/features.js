/* eslint-disable jsx-a11y/media-has-caption */
import servicesData from 'src/static/services-data';

import styles from './styles.module.scss';

const { video, interval } = styles;

const FeaturesComponent = () => {
    return (
        <section>
            <div className="container px-2 py-8">
                {servicesData.map((item, idx) => (
                    <div className={`columns is-vcentered ${(idx + 1) % 2 === 0 ? interval : ''}`} key={item.id}>
                        <div className="column">
                            <h1 className="title has-text-blue has-text-centered-mobile">{item.title}</h1>
                            <p className="has-text-blue has-text-justified" style={{ fontWeight: '500', width: '80%' }}>
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
