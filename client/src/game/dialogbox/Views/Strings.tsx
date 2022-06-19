import {FC} from "react";

import s from "../dialogbox.module.sass"
import {observer} from "mobx-react-lite";


// @ts-ignore
const Strings: FC = ({onNext, text, center}) => {

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