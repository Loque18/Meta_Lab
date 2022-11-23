/* eslint-disable @next/next/no-img-element */
import styles from './style.module.scss';

const { container, iconsImg } = styles;

const valuesData = [
    {
        id: 1,
        title: 'Agility',
        img: '/Media/sprintDoll.png',
    },

    {
        id: 2,
        title: 'commitment',
        img: '/Media/handShake.png',
    },

    {
        id: 3,
        title: 'Integrity',
        img: '/Media/shield.png',
    },

    {
        id: 4,
        title: 'Innovation',
        img: '/Media/Light.png',
    },
];

const AboutData = [
    {
        id: '1',
        title: 'What we do',
        body: () => (
            <p className="has-text-blue" ignore-font>
                Metalab specializes in web3 consutlancy, NFT projects, smart contract development, blockchain education
                & tokenomics, web3 social media marketing, community building and metaverse related content and services
                to help you transition from tranditional web2 experience into web3.
            </p>
        ),
    },

    {
        id: '2',
        title: 'Our Vision',

        body: () => (
            <p className="has-text-blue">
                We believe in a competitive market where organizations push each other through innovative thinking and a
                unique approach to their market.
                <br />
                <br />
                We do not believe inparticipation medals, but more importantly, we believe that the human spirit
                shouldnever be penalized due to lack of expertise or access to funds.
            </p>
        ),
    },

    {
        id: '3',
        title: 'Our Mission',

        body: () => (
            <p className="has-text-blue" >
                At Metalab, we aim to help our clients overcome the 2 main obstacles standing in theway of them reaching
                their highest potential:
                <br />
                <br />
                <ul style={{ listStylePosition: 'inside', listStyleType: 'disc' }}>
                    <li>A consumer base that has higher and higher expectations</li>
                    <li>Technological barriers</li>
                </ul>
                <br />
                We make it our mission to ensure that businesses of all sizes have access to the latest in technological
                advancements and, most importantly, align these solutions with their existing business model to propel
                them forward.
            </p>
        ),
    },
    {
        id: '4',
        title: 'Our Values',
        body: () => (
            <div className={container}>
                {valuesData.map(item => (
                    <div key={item.id} className="flex flex-column align-items-center mb-2">
                        <img src={item.img} className={iconsImg} alt="" width="90" />
                        <h1 className="title has-text-blue is-size-4 has-text-centered p-5">{item.title}</h1>
                    </div>
                ))}
            </div>
        ),
    },
];

export default AboutData;
