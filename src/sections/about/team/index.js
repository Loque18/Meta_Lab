/* eslint-disable @next/next/no-img-element */
import teamData from 'src/static/teamData';

const AboutTeam = () => {
    return (
        <section>
            <div className="container px-5">
                <h1 className="title c is-1 has-text-blue is-uppercase has-text-centered mb-8">
                    <span className="ignore-font">Meet our team</span>
                </h1>
                <div className="columns" style={{ columnGap: '2rem' }}>
                    {teamData.map(member => {
                        return (
                            <div className="column mb-3" key={member.id}>
                                <div className="has-bg-gra1 p-1 has-border-radius-20 flex mb-4">
                                    <img src={member.image} alt="" className="has-border-radius-16" />
                                </div>

                                <div>
                                    <div className="">
                                        <a href={member.url} target="_blank" rel="noreferrer" className="">
                                            {' '}
                                            <h1 className="title is-3 has-text-blue has-text-centered is-uppercase flex align-items-center justify-content-center">
                                                {member.name} &nbsp;
                                                <span className="has-text-blue is-size-5">
                                                    <i className="fab fa-linkedin" />
                                                </span>
                                            </h1>
                                        </a>
                                    </div>

                                    <div className="subtitle is-5 has-text-Iris has-text-centered">
                                        <i>{member.position}</i>
                                    </div>
                                    <p
                                        className="has-text-blue has-text-justified is-hidden"
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
