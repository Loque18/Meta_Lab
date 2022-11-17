import Image from "next/image";
import FooterStyle from 'src/components/style.module.scss'
import iconImg from "../Icons/icons";

const Footer = () => {
    const { FooterContainer, FooterContent, FooterIcons, logoBox, logoFooter, socialIcons, mailContainer, mailImg, mailText, ImgIcon, CopyRights } = FooterStyle;
    return (
        <footer className={FooterContainer}>
            <div className={FooterContent}>
                <div className={logoBox}>
                    <Image src="/Media/Logo-black.png" className={logoFooter} width={320} height={85} />
                </div>
                <div className={FooterIcons}>
                    {
                        iconImg.map((icons) => {
                            return (
                                <div className={socialIcons} key={icons.id}>
                                    <img src={icons.img} className={ImgIcon} alt="icons.png" />
                                </div>
                            )
                        })
                    }

                </div>
                <div className={mailContainer}>
                    <img src="/Media/Mail.png" className={mailImg} alt="" />
                    <h1 className={mailText}>Get in touch with us</h1>
                </div>
            </div>
            <h1 className={CopyRights}>© 2022 MetaLab, ALL RIGHTS RESERVED.</h1>
        </footer>
    );
};

export default Footer;
