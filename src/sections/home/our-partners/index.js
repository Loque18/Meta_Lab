/* eslint-disable @next/next/no-img-element */

import CircleCarousel from 'src/components/internal/circle-carousel';

import styles from './styles.module.scss';

const { root, carousel, column } = styles;

const elements = [
    {
        id: 1,
        img: '/Media/disruptive.webp',
    },
    {
        id: 2,
        img: '/Media/orcania.webp',
    },
];

const HomePartners = () => {
    return (
        <section className={root}>
            <div className="container px-5  " style={{ height: '100%' }}>
                <div className="columns  marginless is-vcentered" style={{ height: '100%' }}>
                    <div className="column is-6 has-bg-fuchsaia" id={column}>
                        <h1 className="title is-1 has-text-centered has-text-blue c">
                            <span className="ignore-font">OUR PARTNERS</span>
                        </h1>
                    </div>
                    <div className="column has-bg-balue">
                        <CircleCarousel data={elements} className={carousel} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePartners;
