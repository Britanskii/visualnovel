import {FC} from "react";

import s from "../dialogbox.module.sass"
import StoreStory from "../../stores/StoreStory";


// @ts-ignore
const Strings: FC = ({onNext, text, center}) => {

    StoreStory.setComplete(true)

    return (
        <>
            <pre onClick = {onNext} className={`${s.strings} ${center ? s.strings__center : ""}`}>
                {text}
            </pre>
            {!center && <div className={s.strings__shadow}/>}
        </>
    )
}

export default Strings