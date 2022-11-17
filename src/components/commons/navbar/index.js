// /* eslint import/newline-after-import: "off" */
// eslint-disable-next-line import/no-extraneous-dependencies
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from 'src/components/style.module.scss'

const Navbar = () => {

    const { navbar, navbarMenu, navLink } = styles;
    const [color, setColor] = useState("black");
    const [img, setImg] = useState("/Media/Logo-black.png");

    useEffect(() => {
        const changeColorOnClick = () => {
            if (color === "black") {
                setColor("red");
            } else {
                setColor("white");
            }
        };

        document.addEventListener("click", changeColorOnClick);

        return () => {
            document.removeEventListener("click", changeColorOnClick);
        };
    }, [color]);

    useEffect(() => {
        const changeLogoOnClick = () => {
            if (img === "/Media/Logo-white.png") {
                setImg("/Media/Logo-black.png");
            } else {
                setImg("/Media/Logo-black.png");
            }
        };

        document.addEventListener("click", changeLogoOnClick);

        return () => {
            document.removeEventListener("click", changeLogoOnClick);
        };
    }, [img]);

    return (
        <nav className={navbar} role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link href="home">
                    <Image src="/Media/Logo-white.png" style={{Img: img}} width={320} height={70} />
                </Link>
                <div className={navbarMenu} id="myNav">
                    <Link href="about">
                        <a href="about" className={navLink} style={{backgroundColor: color,}}>
                            About
                        </a>
                    </Link>
                    <Link className={navLink} href="services">
                        <a href="about" className={navLink}>
                            Services
                        </a>
                    </Link>
                    <Link className={navLink} href="contact">
                        <a href="about" className={navLink}>
                            Contact us
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
