/* eslint-disable @next/next/no-img-element */
import socialMediaData from 'src/static/social-media';
import Link from 'next/link';
import style from './footer.module.scss';

const { container } = style;

const Footer = () => {
    return (
        <footer className="footer py-2">
            <div className="container">
                <div className={`columns ${container}`}>
                    <div className="column">
                        <img src="/Media/Logo-black.png" alt="" width="200" />
                        <h1 className="is-size-6">Metalab LLC , All right reserved</h1>
                    </div>

                    <div className="column">
                        <div className="flex is-align-items-center" style={{ columnGap: '1rem' }}>
                            {socialMediaData.map(sm => (
                                <a
                                    key={sm.id}
                                    href={sm.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="has-text-grey is-size-3 px-2"
                                    style={{ display: 'block' }}
                                >
                                    <span className="icon has-text-blue">{sm.logo()}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="column">
                        <Link href="contact">
                            <h1
                                className="title is-5 has-text-blue flex align-items-center cursor-pointer "
                                style={{ fontWeight: '600' }}
                            >
                                <span className="icon has-text-blue is-size-3 mr-2">
                                    <i className="far fa-envelope" />
                                </span>
                                Get in touch
                            </h1>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
