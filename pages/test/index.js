import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
import { getLayout as getMainLayout } from 'src/layouts/main';
import style from 'src/components/style.module.scss';
import teamCards from 'src/components/commons/TeamCards/TeamCards';

const TestPage = () => {

    const { teamContainer, teamBox, cardContent, teamName, position, teamDescription, imgTeam, boxImg } = style;

    return (
        <div className={teamContainer}>
            {teamCards.map(cards => {
                return (
                    <div className={teamBox} key={cards.id}>
                        <div className={boxImg}>
                            <img src={cards.image} className={imgTeam} alt="teamImg" />
                        </div>
                        <div className={cardContent}>
                            <h1 className={teamName}>{cards.name}</h1>
                            <h2 className={position}>{cards.Position}</h2>
                            <p className={teamDescription}>{cards.description}</p>
                        </div>
                    </div>

                );
            })}
        </div>
    );
};

TestPage.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Test');

export default TestPage;
