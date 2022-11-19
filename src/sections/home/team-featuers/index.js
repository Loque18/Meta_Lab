/* eslint-disable @next/next/no-img-element */
import cards from 'src/static/Cards';

import styles from './teamf.module.scss';

const { root, container, item } = styles;

const TeamExperienceComponent = () => {
    return (
        <section className={root}>
            <div className="container px-5" style={{ height: '100%', display: 'grid', placeItems: 'center' }}>
                <div className={container}>
                    <div className={`box has-border-radius-20 ${item} m-0`}>
                        <div className="flex justify-content-center">
                            <img src={cards[0].img} alt="" width="64" />
                        </div>
                        <h2 className="title is-5 has-text-centered mb-0 has-text-blue">{cards[0].title}</h2>
                        <p className="has-text-centered ">{cards[0].cardDescription}</p>
                    </div>

                    <div className={`box has-bg-gra2 has-border-radius-20 ${item} m-0`}>
                        <div className="flex justify-content-center">
                            <img src={cards[1].img} alt="" width="80" />
                        </div>
                        <h2 className="title is-5 has-text-centered mb-0 has-text-lgrey">{cards[1].title}</h2>
                        <p className="has-text-centered has-text-lgrey">{cards[1].cardDescription}</p>
                    </div>

                    <div className={`box has-border-radius-20 ${item} m-0`}>
                        <div className="flex justify-content-center">
                            <img src={cards[2].img} alt="" width="64" />
                        </div>
                        <h2 className="title is-5 has-text-centered mb-0 has-text-blue">{cards[2].title}</h2>
                        <p className="has-text-centered ">{cards[2].cardDescription}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamExperienceComponent;
