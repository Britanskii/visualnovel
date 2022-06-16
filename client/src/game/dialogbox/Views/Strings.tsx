import {FC} from "react";

import s from "../dialogbox.module.sass"
import {observer} from "mobx-react-lite";


// @ts-ignore
const Strings: FC = ({onNext, text}) => {

    return (
        <>
            <div onClick = {onNext} className={s.strings}>
                {text}
            </div>
            <div className={s.strings__shadow}/>
        </>
    )
}

export default Strings