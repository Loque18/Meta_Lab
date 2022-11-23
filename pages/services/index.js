/* eslint-disable jsx-a11y/media-has-caption */

import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';

import ServicesBanner from 'src/sections/services/services-banner';
import FeaturesComponent from 'src/sections/services/features';

// import Servicestyle from 'pages/services/service.module.scss';

const ServicePage = () => {
    return (
        <div>
            <ServicesBanner />
            <FeaturesComponent />
        </div>
    );
};

ServicePage.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Services');

export default ServicePage;
