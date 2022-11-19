/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
// import Image from 'next/image';
import Link from 'next/link';
// import { useRouter } from 'next/router';

// import { providers } from '@celeste-js/core/dist/constants';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
// import './navbar.scss';

// import { onConnectError } from 'src/static/notifications-functions';
// import { open_modal } from 'src/redux/actions';

import modals from 'src/static/app.modals';

const Navbar = () => {
    // local state
    const [mobileActive, setMobileActive] = useState(false);
    const [burgerActive, setBurgerActive] = useState(false);
    const [bgColor, setBgColor] = useState(false);
    // const [scrollingDown, setScrollingDown] = useState(false);

    // const [dexOnViewport, setDexOnViewport] = useState(false);
    // const [tokenOnViewport, setTokenOnViewport] = useState(false);

    // const { globalReducer } = useSelector(state => state);
    const dispatch = useDispatch();

    const handleHamburgerClick = () => {
        const newValue = !mobileActive;

        setBurgerActive(newValue);
        setMobileActive(newValue);
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
            className={`navbar custom-navbar is-fixed-top 
            ${bgColor ? 'has-bg-blue-o-80 has-bg-blur-1' : 'has-bg-transparent'}`}
            role="navigation"
            aria-label="main navigation"
        >
            <div className="container is-afluid ">
                <div href="https://www.orcania.io" className="navbar-brand  ">
                    <Link href="/home" passHref>
                        <a className="navbar-item">
                            <img src="/Media/Logo-black.png" alt="Metalab Logo" />
                        </a>
                    </Link>

                    <a
                        role="button"
                        className={`navbar-burger has-text-white ${burgerActive ? 'is-active' : ''}`}
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

                <div className={`navbar-menu ${mobileActive ? 'is-active animate__animated animate__fadeInLeft' : ''}`}>
                    <div className="navbar-start">
                        <Link href="/about" passHref>
                            <a className="navbar-item is-active">
                                <span>About</span>
                            </a>
                        </Link>

                        <Link href="/services" passHref>
                            <a className="navbar-item">
                                <span>Services</span>
                            </a>
                        </Link>
                        <Link href="/contact" passHref>
                            <a className="navbar-item">
                                <span>Contact us</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
