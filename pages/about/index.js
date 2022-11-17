/* eslint-disable @next/next/no-img-element */
import Navbar from 'src/components/commons/navbar';
import style from 'pages/about/about.module.scss';
import TeamCards from 'src/components/style.module.scss'
import AboutData from 'src/components/commons/about-section/aboutData';
import valueData from 'src/components/commons/about-section/valueSection';
import dataCard from 'src/components/commons/about-section/secondCards'
import teamCards from 'src/components/commons/TeamCards/TeamCards';
// import ReactPlayer from 'react-player';
import Link from 'next/link';
import Footer from 'src/components/commons/footer';

const about = () => {
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
    } = style;

    const { teamContainer, teamBox, cardContent, teamName, position, teamDescription, imgTeam, boxImg, roundImgContainer, cardSection, Box, imgRound } = TeamCards;
    return (
        <div className={aboutContainer}>
            <Navbar />
            <div className={headContainer}>
                <div className={content}>
                    <h1 className={contentTitle}>
                        MetaLab is one of the
                        <br />
                        <span className={multipleColor}>top world Learders</span> of
                        <br />
                        Web3 technology.
                    </h1>
                    <Link href="contact">
                        <button className={chatButton} type="button">{`Let's chat`}</button>
                    </Link>
                </div>

            </div>

            <div className={middleContainer}>
                {AboutData.map(aboutSection => {
                    return (
                        <div className={AboutSection}>
                            <div className={aboutContent}>
                                <h1 className={aboutTitle}>{aboutSection.title}</h1>
                                <p className={aboutDescription}>{aboutSection.description}</p>
                            </div>
                        </div>
                    );
                })}

                <div className={iconSection}>
                    {valueData.map(icons => {
                        return (
                            <div className={iconContainer}>
                                <div className={iconContent}>
                                    <img src={icons.img} alt="" />
                                    <h1 className={iconTitle}>{icons.title}</h1>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
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
                {
                    dataCard.map((card) => {
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
                        )
                    })
                }
            </div>
            <Footer />
        </div>
    );
};

export default about;

// <video autoPlay loop style={{ width: '500px', height: '500px' }}>
