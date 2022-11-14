// import { useState, useEffect } from 'react';
// import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog';

import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import Navbar from 'src/components/commons/navbar';
// import metaFooter from '@/components/AboutMeta';


import Cards from 'src/components/commons/cards/Cards';
import cardStyle from 'src/components/style.module.scss'
import styles from './home.module.scss';


const Home = () => {
    const { bg, multipleColor, content, title, description, btnMain, } = styles;
    const { cardContainer, cardTitle, cardDescription, cardBox, cardContent } = cardStyle;
    return (

        <div className={bg}>
            <Navbar />
            <div className={content}>
                <h1 className={title}>
                    METALAB, YOUR <br />
                    <span className={multipleColor}>GATEWAY TO WEB3</span>
                </h1>
                <p className={description}>
                    Whether you are an individual with an NFT project idea or a business<br />
                    that want to keep up with the latest technology trends and enter the <br />
                    WEB3 space,  we have your back. Our team will make sure your <br />
                    transition from web2 to web3 is seamless and help you achieve your <br />
                    strategy and long term goals.
                </p>
                <button type="button" className={btnMain}>Our Services</button>
            {
                Cards.map((cards) => {
                    return (
                        <div className={cardContainer}>
                            <div className={cardBox}>
                                <div className={cardContent}>
                                    <h1 className={cardTitle}>{cards.title}</h1>
                                    <p className={cardDescription}>{cards.cardDescription}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    );
};

Home.getLayout = page => getPageTitleLayout(page, 'Home');

export default Home;

