import Image from "next/image";
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
// import {faFacebook} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

config.autoAddCss = false;

const Footer = () => {
    return (
        <footer className="footerContainer">
            <Image src="/Media/Logo-white.png" width={320} height={70} />
            <div className="icons">
                {/* <FontAwesomeIcon icon={faFacebook} /> */}
                <h1>hehe</h1>
            </div>
        </footer>
    );
};

export default Footer;
