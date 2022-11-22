/* eslint-disable @next/next/no-img-element */
import teamData from 'src/static/teamData';

const AboutTeam = () => {
    return (
        <section>
            <div className="container px-5">
                <h1 className="title c is-1 has-text-blue is-uppercase has-text-centered mb-8">
                    <span>Meet our team</span>
                </h1>
                <div className="columns" style={{ columnGap: '2rem' }}>
                    {teamData.map(member => {
                        return (
                            <div className="column mb-3" key={member.id}>
                                <div className="has-bg-gra1 p-1 has-border-radius-20 flex mb-4">
                                    <img src={member.image} alt="" className="has-border-radius-16" />
                                </div>

                                <div>
                                    <h1 className="title is-3 has-text-blue has-text-centered is-uppercase">
                                        {member.name}
                                    </h1>
                                    <h2 className="subtitle is-5 has-text-Iris has-text-centered">
                                        {member.position}
                                    </h2>
                                    <p
                                        className="has-text-blue has-text-justified"
                                        style={{
                                            lineHeight: '1.1rem',
                                        }}
                                    >
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutTeam;
