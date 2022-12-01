const Cards = [
    {
        id: 1,
        img: '/Media/icons/icons-01.png',
        hoverImg: '/Media/icons/icons-06.png',
        title: 'An Enhanced Customer Experience',
        cardDescription:
            'Create distinctive customer experiences to demonstrate to your customers that there is more to your brand than meets the eye. It’s about the experience, not the transaction.',
    },
    {
        id: 2,
        img: '/Media/icons/icons-04.png',
        hoverImg: '/Media/icons/icons-09.png',
        title: 'Raising funds via brand identity',
        cardDescription: () => (
            <p className="has-text-centered">
                Assets as unique as your brand. <br />
                Innovate via the newest technology, seek out new opportunities, increase liquidity, and capitalize from
                your differentiating assets.
            </p>
        ),
    },
    {
        id: 3,
        img: '/Media/icons/icons-05.png',
        hoverImg: '/Media/icons/icons-10.png',
        title: 'Expand your digital footprint through the Metaverse',
        cardDescription:
            'Increase sales by creating an immersive environment for your customers allowing them to experience your offering at the fullest. A digital gateway built on a multi-dimensional economicinfrastructure is at your fingertips.',
    },
];
export default Cards;
