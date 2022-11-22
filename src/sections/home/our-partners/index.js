/* eslint-disable @next/next/no-img-element */

import CircleCarousel from 'src/components/internal/circle-carousel';

import styles from './styles.module.scss';

const { root, carousel } = styles;

const elements = [
    {
        id: 1,
        img: 'https://picsum.photos/id/1/200/100/',
    },
    {
        id: 2,
        img: 'https://picsum.photos/id/154/200/100/',
    },
    {
        id: 3,
        img: 'https://picsum.photos/id/305/200/100/',
    },
    {
        id: 5,
        img: 'https://picsum.photos/id/56/200/100/',
    },
    {
        id: 6,
        img: 'https://picsum.photos/id/19/200/100/',
    },
    {
        id: 7,
        img: 'https://picsum.photos/id/96/200/100/',
    },
];

const HomePartners = () => {
    return (
        <section className={root}>
            <div className="container px-5  " style={{ height: '100%' }}>
                <div className="columns is-vcentered">
                    <div className="column mb-6 is-6">
                        <h1 className="title is-1 has-text-centered has-text-blue c">
                            <span>OUR PARTNERS</span>
                        </h1>
                    </div>
                    <div className="column is-6">
                        <CircleCarousel data={elements} className={carousel} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePartners;
