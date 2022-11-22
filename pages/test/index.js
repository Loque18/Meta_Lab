// /* eslint-disable no-param-reassign */
// import { getLayout as getPageTitleLayout } from 'src/layouts/page-title';
// import { getLayout as getMainLayout } from 'src/layouts/main';

// import { useEffect, useRef, useState } from 'react';
// import styles from './style.module.scss';
// import CircleCarousel from '@/components/internal/circle-carousel';

// const { root, main_container, element, btn_container } = styles;

// const elements = [
//     {
//         id: 1,
//         img: 'https://picsum.photos/id/1/200/100/',
//     },
//     {
//         id: 2,
//         img: 'https://picsum.photos/id/154/200/100/',
//     },
//     {
//         id: 3,
//         img: 'https://picsum.photos/id/305/200/100/',
//     },
//     {
//         id: 5,
//         img: 'https://picsum.photos/id/56/200/100/',
//     },
//     {
//         id: 6,
//         img: 'https://picsum.photos/id/19/200/100/',
//     },
//     {
//         id: 7,
//         img: 'https://picsum.photos/id/96/200/100/',
//     },
// ];

// const TestPage = () => {
//     // const cRef = useRef(null);

//     // const [tt, setTT] = useState(0);

//     // const onLeftClick = () => {
//     //     setTT(tt + 1);
//     // };

//     // const onRightClick = () => {
//     //     setTT(tt - 1);
//     // };

//     // useEffect(() => {
//     //     if (!cRef.current) return;

//     //     const { current: container } = cRef;

//     //     const { children } = container;

//     //     const cWidth = container.offsetWidth;
//     //     const cHeight = container.offsetHeight;
//     //     const radius = cHeight / 2;

//     //     const childrenArray = Array.from(children);

//     //     const ang = (2 * Math.PI) / childrenArray.length;
//     //     const deg = (ang * 180) / Math.PI;
//     //     const tot = -deg * tt + 180;

//     //     childrenArray.forEach((item, idx) => {
//     //         const angleBetween = (idx / childrenArray.length) * 2 * Math.PI;
//     //         const angle = tot * (Math.PI / 180) + angleBetween;
//     //         const x = radius * Math.cos(angle) + cWidth / 2;
//     //         const y = radius * Math.sin(angle) + cHeight / 2;

//     //         item.style.left = `${x}px`;
//     //         item.style.top = `${y}px`;

//     //         item.style.transform = `translate(-50%, -50%)`;

//     //         item.style.position = 'absolute';
//     //         item.style.transition = 'all 0.5s ease-in-out';
//     //     });

//     //     // calculate rotation for children
//     // }, [cRef.current, tt]);

//     return (
//         <section className={root}>
//             {/* <div id="btn-container" className={btn_container}>
//                 <button type="button" onClick={onLeftClick}>
//                     <span>{' < '}</span>
//                 </button>
//                 <button type="button" onClick={onRightClick}>
//                     <span>{' > '}</span>
//                 </button>
//             </div>
//             <div className={main_container} ref={cRef}>
//                 {elements.map(({ id, name }) => (
//                     <div key={id} className={element}>
//                         {name}
//                     </div>
//                 ))}
//             </div> */}
//             <CircleCarousel data={elements} />
//         </section>
//     );
// };

// TestPage.getLayout = page => getPageTitleLayout(getMainLayout(page), 'Test');

// export default TestPage;

const Page = () => {
    return <div>test</div>;
};

export default Page;
