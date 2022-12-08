/* eslint-disable @next/next/no-img-element */
import cards from 'src/static/Cards';

import styles from './teamf.module.scss';

const { root, container, item, img1, img2, pp } = styles;

const TeamExperienceComponent = () => {
    return (
        <section className={root}>
            <div className="container px-5 flex flex-column py-6" style={{ height: '100%' }}>
                <h1 className="title is-1 has-text- has-text-blue mb-0 py-3">
                    <span className="ignore-font">
                        Surpass the competition by distinguishing <br /> your brand via NFT technology
                    </span>
                </h1>
                <br />
                <br />
                <br />
                <div className={container}>
                    {/* <div className={`box has-border-radius-20 ${item} m-0`}>
                        <div className="flex justify-content-center">
                            <img src={cards[0].img} alt="" width="80" />
                        </div>
                        <h2 className="title is-5 has-text-centered mb-0 has-text-blue">{cards[0].title}</h2>
                        <p className="has-text-centered has-text-blue ">{cards[0].cardDescription}</p>
                    </div> */}

                    {cards.map(card => (
                        <div className={`box has-border-radius-20 ${item} m-0`} key={card.id}>
                            <div className="">
                                <div className="flex justify-content-center">
                                    <img src={card.img} alt="" width="80" className={img1} />
                                    <img src={card.hoverImg} alt="" width="80" className={img2} />
                                </div>
                                <br />
                                <h2 className="title is-5 has-text-centered mb-0 has-text-blue">{card.title}</h2>
                                <br />
                                <div className={`has-text-centered has-text-blue ${pp}`}>
                                    {typeof card.cardDescription === 'string'
                                        ? card.cardDescription
                                        : card.cardDescription()}
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* <div className={`box has-bg-gra2 has-border-radius-20 ${item} m-0`}>
                        <div className="flex justify-content-center">
                            <img src={cards[1].img} alt="" width="95" />
                        </div>
                        <h2 className="title is-5 has-text-centered mb-0 has-text-lgrey">{cards[1].title}</h2>
                        {cards[1].cardDescription()}
                    </div>

                    <div className={`box has-border-radius-20 ${item} m-0`}>
                        <div className="flex justify-content-center">
                            <img src={cards[2].img} alt="" width="80" />
                        </div>
                        <h2 className="title is-5 has-text-centered mb-0 has-text-blue">{cards[2].title}</h2>
                        <p className="has-text-centered has-text-blue ">{cards[2].cardDescription}</p>
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default TeamExperienceComponent;
