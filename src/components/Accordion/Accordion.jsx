import s from './Accordion.module.scss';
import Chevron from "./Chevron";
import {useEffect, useRef, useState} from "react";

const Accordion = (props) => {

    const [active, setActive] = useState(false);
    const contentRef = useRef(null)

    useEffect(() => {
        contentRef.current.style.maxHeight = active ? `100vh` : '0'
    }, [contentRef, active])

    const toggleActive = () => {
        setActive(!active);
    }

    return (
        <div className={s.wrapper}>
            <button className={active ? `${s.accordion} ${s.active}` : `${s.accordion}`}
                    onClick={toggleActive}>
                <p className={s.title}>{props.title}</p>
                <Chevron className={s.icon} width={10} fill={'#777'}/>
            </button>

            <div
                ref={contentRef}
                className={s.content}
            >
                {props.children}
            </div>
        </div>
    )
}

export default Accordion;