/* eslint-disable @next/next/no-img-element */

import CircleCarousel from 'src/components/internal/circle-carousel';

import styles from './styles.module.scss';

const { root, carousel } = styles;

const elements = [
    {
        id: 1,
        img: '/Media/disruptive.png',
    },
    {
        id: 2,
        img: '/Media/soundtrack.png',
    },
    {
        id: 3,
        img: '/Media/triblox.jpeg',
    },
    {
        id: 4,
        img: '/Media/orcania.png',
    },
];

const HomePartners = () => {
    return (
        <section className={root}>
            <div className="container px-5  " style={{ height: '100%' }}>
                <div className="columns  is-vcentered">
                    <div className="column is-6 has-bg-fuchsaia">
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
