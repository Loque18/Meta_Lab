import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';

import HomeBanner from 'src/sections/home/home-banner';
import TeamExperienceComponent from 'src/sections/home/team-featuers';
import HomeBanner2 from 'src/sections/home/home-banner-2';
import HomeOurServices from 'src/sections/home/our-services';

const Home = () => {
    return (
        <div>
            <HomeBanner />
            <TeamExperienceComponent />
            <HomeBanner2 />
            <HomeOurServices />
        </div>
    );
};

Home.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Home');

export default Home;
