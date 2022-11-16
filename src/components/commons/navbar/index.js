/* eslint import/newline-after-import: "off" */
import Image from 'next/image';
import Link from 'next/link';
import styles from 'src/components/style.module.scss'
const Navbar = () => {
    const { navbar, navbarMenu, navLink } = styles;
    return (
        <nav className={navbar} role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link href="home">
                    <Image src="/Media/Logo-white.png" width={320} height={70} />
                </Link>
                <div className={navbarMenu}>
                    <Link href="about">
                        <a href="about" className={navLink}>
                            About
                        </a>
                    </Link>
                    <Link className={navLink} href="about">
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
