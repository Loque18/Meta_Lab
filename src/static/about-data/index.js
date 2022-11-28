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
        title: 'Commitment',
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
                Our Metalab consultancy team is dedicated to use the newest in WEB3 technologies to help propel your
                business and establish yourselves as a leading force in your field. This starts with understanding your
                reality and objectives, putting your organization at the center of your transition to WEB3.
            </p>
        ),
    },

    {
        id: '2',
        title: 'Our Vision',

        body: () => (
            <p className="has-text-blue">
                Equity is at the heart of Metalab’s conception.
                <br />
                We believe that the human spirit of innovation should never be held back by unattainable resources.
                <br />
                <br />
                By making knowledge and resources accessible to as many people as possible, we will help individuals,
                organizations, and the societies that they are a part of, achieve their highest potential.
            </p>
        ),
    },

    {
        id: '3',
        title: 'Our Mission',

        body: () => (
            <p className="has-text-blue">
                At Metalab, we aim to democratize innovation by making the technological resources and knowledge
                available to as many people as possible.
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
