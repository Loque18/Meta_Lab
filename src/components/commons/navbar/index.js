/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

// import { providers } from '@celeste-js/core/dist/constants';
import { useState, useEffect } from 'react';
// import './navbar.scss';

// import { onConnectError } from 'src/static/notifications-functions';
// import { open_modal } from 'src/redux/actions';

const Navbar = () => {
    const router = useRouter();

    // local state
    const [mobileActive, setMobileActive] = useState(false);
    // const [burgerActive, setBurgerActive] = useState(false);
    const [bgColor, setBgColor] = useState(false);
    // const [scrollingDown, setScrollingDown] = useState(false);

    // const [dexOnViewport, setDexOnViewport] = useState(false);
    // const [tokenOnViewport, setTokenOnViewport] = useState(false);

    // const { globalReducer } = useSelector(state => state);

    const handleHamburgerClick = () => {
        const newValue = !mobileActive;

        setMobileActive(newValue);
    };

    const closeMobileMenu = () => {
        setMobileActive(false);
    };

    // const handleOpenWalletsModal = () => {
    //     dispatch(open_modal({ modalName: modals.WALLETSMODAL }));
    //     handleHamburgerClick();
    // };

    // const handleOpenWalletAccountModal = () => {
    //     dispatch(open_modal({ modalName: modals.WALLETACCOUNT }));
    //     handleHamburgerClick();
    // };

    // const handleOpenNetworksModal = () => {
    //     dispatch(open_modal({ modalName: modals.networksModal }));
    //     handleHamburgerClick();
    // };

    // const handleNavbarItemClick = () => {
    //     handleHamburgerClick();
    // };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (+window.scrollY > 50) setBgColor(true);
            else setBgColor(false);
        });
    }, []);

    return (
        <nav
            className={`navbar custom-navbar is-fixed-top ${bgColor ? 'dark has-bg-blur-1' : 'light'} ${
                !bgColor && router.pathname ? 'home' : ''
            }`}
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container">
                <div href="https://www.orcania.io" className="navbar-brand  ">
                    <Link href="/home" passHref>
                        <a className="navbar-item" onClick={closeMobileMenu}>
                            <img src="/Media/Logo-white.png" alt="Metalab Logo" />
                        </a>
                    </Link>

                    <a
                        role="button"
                        className={`navbar-burger  ${mobileActive ? ' is-active ' : ' '} has-text-white`}
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbarBasicExample"
                        onClick={handleHamburgerClick}
                    >
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                        <span aria-hidden="true" />
                    </a>
                </div>

                <div className={`navbar-menu ${mobileActive ? 'is-active ' : ''}`}>
                    <div className="navbar-start">
                        <Link href="/about" passHref>
                            <a
                                className={`navbar-item  ${router.pathname === '/about' ? 'is-active ' : ''}`}
                                onClick={closeMobileMenu}
                            >
                                <span>About</span>
                            </a>
                        </Link>
                        <Link href="/services" passHref>
                            <a
                                className={`navbar-item  ${router.pathname === '/services' ? 'is-active' : ''}`}
                                onClick={closeMobileMenu}
                            >
                                <span>Services</span>
                            </a>
                        </Link>
                        <Link href="/contact" passHref>
                            <a
                                className={`navbar-item  ${router.pathname === '/contact' ? 'is-active' : ''}`}
                                onClick={closeMobileMenu}
                            >
                                <span>Contact us</span>
                            </a>
                        </Link>{' '}
                        {/* <Link href="/contact" passHref>
                            <a className={`navbar-item ${router.pathname === '/contact' ? 'is-active' : ''}`}>
                                <span>Contact us</span>
                            </a>
                        </Link>
                        <Link href="/contact" passHref>
                            <a className={`navbar-item ${router.pathname === '/contact' ? 'is-active' : ''}`}>
                                <span>Contact us</span>
                            </a>
                        </Link> */}
                    </div>
                </div>

                <div />
            </div>
        </nav>
    );
};

export default Navbar;
