/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable @next/next/no-img-element */

import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';

import BannerAbout from 'src/sections/about/banner-about';

import style from 'pages/about/about.module.scss';
import TeamCards from 'src/components/style.module.scss';
import AboutData from 'src/static/about-data';
import dataCard from 'src/components/commons/about-section/secondCards';
import teamCards from 'src/components/commons/TeamCards/TeamCards';
// import ReactPlayer from 'react-player';

const AboutPage = () => {
    // const [isPlaying, setIsPlaying] = useState(true);
    const {
        aboutContainer,
        headContainer,
        AboutSection,
        iconContainer,
        iconTitle,
        iconContent,
        contentTitle,
        aboutTitle,
        aboutDescription,
        aboutContent,
        iconSection,
        middleContainer,
        multipleColor,
        chatButton,
        content,
        videoBox,
    } = style;

    const {
        teamContainer,
        teamBox,
        cardContent,
        teamName,
        position,
        teamDescription,
        imgTeam,
        boxImg,
        roundImgContainer,
        cardSection,
        Box,
        imgRound,
    } = TeamCards;
    return (
        <div>
            <BannerAbout />

            <section>
                <div className="container px-5">
                    {AboutData.map(item => {
                        return (
                            <div key={item.id} className="mb-8">
                                <h1 className="title at has-text-blue has-text-centered mb-6">
                                    <span>{item.title}</span>
                                </h1>
                                <p className="">{item.body()}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
            <div className={teamContainer}>
                {teamCards.map(cards => {
                    return (
                        <div className={teamBox} key={cards.id}>
                            <div className={boxImg}>
                                <img src={cards.image} className={imgTeam} alt="teamImg" />
                            </div>
                            <div className={cardContent}>
                                <h1 className={teamName}>{cards.name}</h1>
                                <h2 className={position}>{cards.Position}</h2>
                                <p className={teamDescription}>{cards.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={roundImgContainer}>
                {dataCard.map(card => {
                    return (
                        <div className={cardSection}>
                            <div className={Box}>
                                <img src={card.img} className={imgRound} alt="" />
                            </div>
                            <div className="Imgcontent">
                                <h1 className={teamName}>{card.name}</h1>
                                <h2 className={position}>{card.position}</h2>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

AboutPage.getLayout = page => getPageTitleLayout(getMainLayout(page), 'About');

export default AboutPage;

// <video autoPlay loop style={{ width: '500px', height: '500px' }}>
