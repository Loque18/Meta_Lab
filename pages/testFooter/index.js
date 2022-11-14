/* eslint import/newline-after-import: "off" */
import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
// import Image from 'next/image';
import style from 'src/components/style.module.scss'

const TestFooterPage = () => {
    const { footerContainer, footerTitle, secondColor, footerDescription, imgSize, footerImgcontainer } = style;
    return (
        <div className={footerContainer}>
            <div className='footerContent'>
                <h1 className={footerTitle}>
                    We Turn Ideas into a
                    <span className={secondColor}><br />competitive business</span>
                </h1>
                <p className={footerDescription}>
                    With over than 10 years of experience in technology, from
                    <br />
                    business strategies to web development and brand design to
                    <br />
                    IT solutions, we help you turn your innovative ideas into
                    competitive market-ready solutions.
                </p>
            </div>
            <div className={footerImgcontainer}>
                <img src="/Media/Hand-Holding-Smart-Phone.png" className={imgSize} alt="" />
            </div>
        </div>
    );
};

TestFooterPage.getLayout = page => getPageTitleLayout(getMainLayout(page), 'TestFooter');

export default TestFooterPage;        

