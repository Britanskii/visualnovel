import {FC} from "react";

import s from './dialogbox.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../stores/StoreStory";

const Dialogbox: FC = observer(() => {

    const {getText, incStoryPosition, getSpeaker, getNoChoice, setStory} = StoreStory

    const speaker = getSpeaker()
    const text = getText()

    const onNext = () => {
        incStoryPosition()
        if (getNoChoice() !== undefined) {
            setStory(getNoChoice())
        }
    }

    return (
        <div onClick={onNext} className={s.dialogbox}>
            <div className={s.dialogbox__header}>{speaker}</div>
            <div className={s.dialogbox__line}/>
            <div className={s.dialogbox__body}>
                {text}
            </div>
        </div>
    )
})

export default Dialogbox