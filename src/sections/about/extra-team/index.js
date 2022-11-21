/* eslint-disable @next/next/no-img-element */
import extraTeamData from 'src/static/extraTeamData';

import { Carousel } from 'primereact/carousel';

const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 2,
    },
    {
        breakpoint: '768px',
        numVisible: 1,
        numScroll: 1,
    },
];

const ExtraTeamAbout = () => {
    const memberTemplate = item => {
        return (
            <div className="column">
                <div className="mb-5 flex justify-content-center">
                    <img src={item.img} alt="" style={{ borderRadius: '50%' }} className="has-border-3-blue-o-100" />
                </div>
                <div className="">
                    <h1 className="title is-5 has-text-blue is-uppercase has-text-centered">{item.name}</h1>
                    <h2 className="subtitle is-6 has-text-cyan is-capitalized has-text-centered">{item.position}</h2>
                </div>
            </div>
        );
    };
    return (
        <section className="py-8 ">
            <div className="container px-5 py-4">
                <div className="columns is-hidden-touch" style={{ columnGap: '2rem' }}>
                    {extraTeamData.map(item => {
                        return (
                            <div className="column">
                                <div className="mb-5">
                                    <img
                                        src={item.img}
                                        alt=""
                                        style={{ borderRadius: '50%' }}
                                        className="has-border-3-blue-o-100"
                                    />
                                </div>
                                <div className="">
                                    <h1 className="title is-5 has-text-blue is-uppercase has-text-centered">
                                        {item.name}
                                    </h1>
                                    <h2 className="subtitle is-6 has-text-cyan is-capitalized has-text-centered">
                                        {item.position}
                                    </h2>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="carousel-team-container is-hidden-desktop">
                    <Carousel
                        value={extraTeamData}
                        numVisible={1}
                        numScroll={1}
                        circular
                        itemTemplate={memberTemplate}
                        autoplayInterval={3000}
                        responsiveOptions={responsiveOptions}
                    />
                </div>
            </div>
        </section>
    );
};

export default ExtraTeamAbout;
