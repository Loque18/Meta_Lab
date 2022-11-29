/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable @next/next/no-img-element */

import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';

import BannerAbout from 'src/sections/about/banner-about';
import AboutInfo from 'src/sections/about/info';
import AboutTeam from 'src/sections/about/team';
// import ExtraTeamAbout from 'src/sections/about/extra-team';

// import TeamCards from 'src/components/style.module.scss';
// import ReactPlayer from 'react-player';

const AboutPage = () => {
    return (
        <div>
            <BannerAbout />
            <AboutInfo />
            <AboutTeam />
            {/* <ExtraTeamAbout /> */}
        </div>
    );
};

AboutPage.getLayout = page => getPageTitleLayout(getMainLayout(page), 'About');

export default AboutPage;

// <video autoPlay loop style={{ width: '500px', height: '500px' }}>
