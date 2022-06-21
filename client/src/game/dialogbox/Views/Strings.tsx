import {FC} from "react";

import s from "../dialogbox.module.sass"
import StoreStory from "../../stores/StoreStory";
import useGetAdaptiveClass from "../../hooks/useGetAdaptiveClass";


// @ts-ignore
const Strings: FC = ({onNext, text, center}) => {

    StoreStory.setComplete(true)

    const classAdaptive = useGetAdaptiveClass(s, "strings")

    return (
        <>
            <pre onClick = {onNext} className={`${s.strings} ${center ? s.strings__center : ""} ${classAdaptive}`}>
                {text}
            </pre>
            {!center && <div className={s.strings__shadow}/>}
        </>
    )
}

export default Strings