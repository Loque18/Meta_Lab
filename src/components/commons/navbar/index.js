// /* eslint import/newline-after-import: "off" */
// eslint-disable-next-line import/no-extraneous-dependencies
import { useState, useEffect } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import navStyles from 'src/components/style.module.scss'

const Navbar = () => {

    const { navbar, navbarMenu, navLink, navbarBrand, logoImg } = navStyles;
    const [Color, setColor] = useState("black");
    const [img, setImg] = useState("");

    useEffect(() => {
        const changeColorOnClick = () => {
            if (Color === "black") {
                setColor("#03045e");
            } else {
                setColor("white");
            }
        };

        document.addEventListener("click", changeColorOnClick);

        return () => {
            document.removeEventListener("click", changeColorOnClick);
        };
    }, [Color]);

    useEffect(() => {
        const changeLogoOnClick = () => {
            if (img === "") {
                setImg("/Media/Logo-black.png");
            } else {
                setImg("/Media/Logo-white.png");
            }
        };

        document.addEventListener("click", changeLogoOnClick);

        return () => {
            document.removeEventListener("click", changeLogoOnClick);
        };
    }, [img]);

    return (
        <nav className={navbar} role="navigation" aria-label="main navigation">
            <div className={navbarBrand} style={{ Img: img }}>
                <Link href="home">
                    <img src="/Media/Logo-white.png" className={logoImg} alt="" />
                </Link>
                <div className={navbarMenu} id="myNav" style={{ color: Color, }}>
                    <Link href="about">
                        <a href="about" className={navLink}>
                            About
                        </a>
                    </Link>
                    <Link className={navLink} href="services">
                        <a href="service" className={navLink}>
                            Services
                        </a>
                    </Link>
                    <Link className={navLink} href="contact">
                        <a href="contact" className={navLink}>
                            Contact us
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
