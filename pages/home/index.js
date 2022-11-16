import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import Navbar from 'src/components/commons/navbar';
// import metaFooter from '@/components/AboutMeta';

import Cards from 'src/components/commons/cards/Cards';
import ComponentStyle from 'src/components/style.module.scss';
// import Carousel from 'src/components/commons/Carousel/Carousel';
// import Footer from 'src/components/commons/footer';
import styles from './home.module.scss';

const Home = () => {
    const { bg, multipleColor, content, title, description, btnMain } = styles; // home Scss
    const { cardContainer, card, cardTitle, cardDescription, cardContent } = ComponentStyle; // cards Scss
    const { footerContainer, footerTitle, footerDescription, footerImgcontainer, imgSize } = ComponentStyle;
    const { ourServices, servicesTitle, OurServicesDescription } = ComponentStyle; // Services-Home-Section

    return (
        <div className="pageContainer">
            <div className={bg}>
                <Navbar />
                <div className={content}>
                    <h1 className={title}>
                        METALAB, YOUR <br />
                        <span className={multipleColor}>GATEWAY TO WEB3</span>
                    </h1>
                    <p className={description}>
                        Whether you are an individual with an NFT project idea or a business
                        <br />
                        that want to keep up with the latest technology trends and enter the <br />
                        WEB3 space, we have your back. Our team will make sure your <br />
                        transition from web2 to web3 is seamless and help you achieve your <br />
                        strategy and long term goals.
                    </p>
                    <button type="button" className={btnMain}>
                        Our Services
                    </button>
                </div>

                {/* Card Section */}
                <div className={cardContainer}>
                    {Cards.map(cards => {
                        return (
                            <div className={card} key={cards.id}>
                                <div className={cardContent}>
                                    <span className={cardTitle}>{cards.title}</span>
                                    <p className={cardDescription}>{cards.cardDescription}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className={footerContainer}>
                    <div className="footerContent">
                        <h1 className={footerTitle}>
                            We Turn Ideas into a
                            <span className={multipleColor}>
                                <br />
                                competitive business
                            </span>
                        </h1>
                        <p className={footerDescription}>
                            With over than 10 years of experience in technology, from
                            <br />
                            business strategies to web development and brand design
                            <br />
                            to IT solutions, we help you turn your innovative ideas into competitive market-ready
                            solutions.
                        </p>
                    </div>
                    <div className={footerImgcontainer}>
                        <img src="/Media/Hand-Holding-Smart-Phone.png" className={imgSize} alt="" />
                    </div>
                </div>

                {/* Services */}
                <div className={ourServices}>
                    <h1 className={servicesTitle}>Our Services</h1>
                    <h2 className={OurServicesDescription}>
                        We offer the full spectrum of services to help you move <br /> into the web3 space seamlessly
                    </h2>
                    <button className={btnMain} type="button">
                        View All
                    </button>
                </div>
            </div>
        </div>
    );
};

Home.getLayout = page => getPageTitleLayout(page, 'Home');

export default Home;
