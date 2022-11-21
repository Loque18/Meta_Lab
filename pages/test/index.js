import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';

const TestPage = () => {
    return <div></div>;
};

TestPage.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Test');

export default TestPage;
