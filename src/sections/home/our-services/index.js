/* eslint-disable @next/next/no-img-element */

import { Carousel } from 'primereact/carousel';

import Link from 'next/link';

import servicesData from 'src/static/services-data';

import styles from './styles.module.scss';

const { root, frontFace, backFace, boxesContainer, perspective, cardBox } = styles;

const responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 2,
    },
    {
        breakpoint: '769px',
        numVisible: 1,
        numScroll: 1,
    },
];

const HomeOurServices = () => {
    const itemTemplate = item => {
        return (
            <div className={perspective}>
                <div className={`${boxesContainer} has-border-radius-20`}>
                    <div className={`${cardBox} ${frontFace}  p-2 `}>
                        <img src="https://picsum.photos/300" alt="service" />
                        <h1 className="title has-text-lgrey is-5 has-text-centered">
                            {item.title.substring(3, item.title.length)}
                        </h1>
                    </div>
                    <div className={`${cardBox} ${backFace}`}>
                        {/* <img src="https://picsum.photos/200" alt="" /> */}
                        <h1 className="title has-text-lgrey is-5 has-text-centered">
                            {item.title.substring(3, item.title.length)}
                        </h1>
                        <h1 className="subtitle has-text-lgrey is-6 has-text-centered mb-0">
                            {`${item.description.substring(0, 80)}...`}
                        </h1>

                        <span className="icon has-text-white">
                            <i className="fas fa-arrow-right" />
                        </span>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className={root}>
            <div className="container px-5 py-6  " style={{ height: '100%' }}>
                <h1 className="title is-1 has-text-centered has-text-blue c">
                    <span>OUR SERVICES</span>
                </h1>
                <br />
                <h2 className="subtitle has-text-centered has-text-blue" style={{ fontWeight: '500' }}>
                    We offer the full spectrum of services to help you move <br /> into the web3 space seamlessly
                </h2>

                <br />
                <br />

                <div className="services-carousel-container">
                    <Carousel
                        value={servicesData}
                        numVisible={3}
                        numScroll={3}
                        responsiveOptions={responsiveOptions}
                        itemTemplate={itemTemplate}
                        circular
                        autoplayInterval={10000}
                    />
                </div>

                <br />
                <br />

                <div className="flex justify-content-center">
                    <Link href="services">
                        <button type="button" className="button is-medium is-gra1 pr-7 pl-6 has-border-radius-14 has-border-radius-14">
                            <b>View All</b>
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeOurServices;
