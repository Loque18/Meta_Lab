/* eslint-disable no-param-reassign */
import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';

const { main_container, element, btn_container } = styles;

const CircleCarousel = ({ data, className }) => {
    const cRef = useRef(null);

    const [tt, setTT] = useState(0);
    const [disabled, setDisabled] = useState(false);

    const onLeftClick = () => {
        setTT(tt + 1);
        setDisabled(true);
        setTimeout(() => {
            setDisabled(false);
        }, 500);
    };

    const onRightClick = () => {
        setTT(tt - 1);
        setDisabled(true);
        setTimeout(() => {
            setDisabled(false);
        }, 500);
    };

    useEffect(() => {
        if (!cRef.current) return;

        const { current: container } = cRef;

        const { children } = container;

        const cWidth = container.offsetWidth;
        const cHeight = container.offsetHeight;
        const radius = cHeight / 2;

        const childrenArray = Array.from(children).filter(div => div.id !== 'btn-container');

        const ang = (2 * Math.PI) / childrenArray.length;
        const deg = (ang * 180) / Math.PI;
        const tot = -deg * tt + 180;

        childrenArray.forEach((item, idx) => {
            const angleBetween = (idx / childrenArray.length) * 2 * Math.PI;
            const angle = tot * (Math.PI / 180) + angleBetween;

            const x = radius * Math.cos(angle) + cWidth / 2;
            const y = radius * Math.sin(angle) + cHeight / 2;

            item.style.left = `${x}px`;
            item.style.top = `${y}px`;

            item.style.transform = `translate(-50%, -50%)`;

            item.style.position = 'absolute';
            item.style.transition = 'all 0.75s cubic-bezier(0.68, -0.6, 0.32, 1.6)';

            const angleDeg = (angle * (180 / Math.PI)) % 360;

            item.style.opacity = angleDeg > 170 && angleDeg < 190 ? 1 : 0.25;

            // if angle is between -170 and -190, then it is the center element, so make it bigger
            if (angleDeg > 170 && angleDeg < 190) {
                item.style.transform = 'translate(-50%, -50%) scale(1.2)';
            }
        });

        // calculate rotation for children
    }, [cRef, tt]);

    useEffect(() => {
        if (!cRef.current) return undefined;

        const interval = setInterval(() => {
            setTT(tt - 1);
        }, 5 * 1000);

        return () => clearInterval(interval);
    }, [cRef, tt]);

    return (
        <div className={`${className} ${main_container}`} ref={cRef}>
            <div id="btn-container" className={btn_container}>
                <button
                    type="button"
                    onClick={onLeftClick}
                    className="unstyled-button has-text-cyan is-size-3  has-bg-bluea"
                    disabled={disabled}
                >
                    <span className="icon">
                        <i className="fal fa-angle-left" />
                    </span>
                </button>
                <button
                    type="button"
                    onClick={onRightClick}
                    className="unstyled-button has-text-cyan is-size-3  has-bg-bluea"
                    disabled={disabled}
                >
                    <span className="icon">
                        <i className="fal fa-angle-right" />
                    </span>
                </button>
            </div>
            {data.map(({ id, img }) => (
                <div key={id} className={element} style={{ '--bg-img': `url(${img})` }} />
            ))}
        </div>
    );
};

export default CircleCarousel;
