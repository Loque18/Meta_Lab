import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';

import HomeBanner from 'src/sections/home/home-banner';
import TeamExperienceComponent from 'src/sections/home/team-featuers';
import HomeBanner2 from 'src/sections/home/home-banner-2';
import HomeOurServices from 'src/sections/home/our-services';
import HomePartners from 'src/sections/home/our-partners';
import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        const { body } = document;

        body.classList.remove('has-navbar-fixed-top');

        return () => {
            body.classList.add('has-navbar-fixed-top');
        };
    }, []);

    return (
        <div>
            <HomeBanner />
            <TeamExperienceComponent />
            <HomeBanner2 />
            <HomeOurServices />
            <HomePartners />
        </div>
    );
};

Home.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Home');

export default Home;
