/* eslint-disable jsx-a11y/media-has-caption */
import Servicestyle from 'pages/services/service.module.scss';
import Nav from 'src/components/commons/navbar';
import Footer from 'src/components/commons/footer';
import Link from 'next/link';
import dataServices from 'src/components/commons/servicesData/services';


const service = () => {
  const {
    serviceContainer,
    headerService,
    servicesTitle,
    // containerImg,
    serviceContent,
    serviceDescription,
    servicesButton,
    videoBoxHeader,
    middleServiceContainer,
    serviceMiddleContent,
    serviceContentTitle,
    serviceContentDescription,
    wordBreak,
    vestorImg,
    videos,
  } = Servicestyle;

  return (
    <div className={serviceContainer}>
      <Nav />
      <div className={headerService}>
        <div className={serviceContent}>
          <h1 className={servicesTitle}> We’ ve got your back! </h1>
          <p className={serviceDescription}>
            Metalab provides full spectrum of services to help <br /> you move into the web3 space
            seamlessly.
          </p>
          <Link href="contact">
            <button className={servicesButton} type="button">
              {`let's chat`}
            </button>
          </Link>
        </div>
        <div className={videoBoxHeader}>
          <video width="750" height="500" autoPlay="true" onScroll="true" loop="true">
            <source src='/videos/96502-web-30.mp4' type="video/mp4" />
          </video>
        </div>

      </div>
      <div className={middleServiceContainer}>
        {
          dataServices.map((content) => {
            return (
              <div className={serviceMiddleContent} key={content.id}>
                <video className={videos} style={{ pointerEvents: NaN }} autoPlay="true" onScroll="true" loop>
                  <source src={content.video} type="video/mp4" />
                </video>
                <img src={content.img} className={vestorImg} alt="" />
                <div className={wordBreak}>
                  <h1 className={serviceContentTitle}>{content.title}</h1>
                </div>
                <p className={serviceContentDescription}>{content.description}</p>

              </div>
            )
          })
        }
      </div>
      <Footer />
    </div>
  );
};

export default service;
