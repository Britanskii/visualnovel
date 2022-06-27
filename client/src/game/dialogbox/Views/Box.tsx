import {FC} from "react";
import s from "../dialogbox.module.sass";
// @ts-ignore
import save from "../../../../res/icons/save.svg";
import TypingText from "../TypingText";
import {stateGame} from "../../interfaces/enums";
import useGetAdaptiveClass from "../../hooks/useGetAdaptiveClass";
import StoreGame from "../../stores/StoreGame";
import StoreStory from "../../stores/StoreStory";


// @ts-ignore
const Box: FC = ({onNext, speaker, text, timer, setTimer}) => {

    const classAdaptive = useGetAdaptiveClass(s, "dialogbox")

    const onOpenMenu = () => {
        StoreGame.setStateGame(stateGame.MENU)
    }

    const onFastSave = () => StoreStory.setLocalSave(true)

    return (
        <div onClick={onNext} className={`${s.dialogbox} ${classAdaptive} ${text.length === 0 ? s.dialogbox__hide : ""}`}>
            <div className={s.dialogbox__header}>
                <div className={s.dialogbox__navigation}>
                    <div onClick={onOpenMenu} className={s.dialogbox__menu}>МЕНЮ</div>
                    {/*<div onClick={onFastSave} className={s.dialogbox__menu}>СОХРАНИТЬ</div>*/}
                </div>
                {/*<img onClick={onSave} className={s.dialogbox__save} src={save} alt="save"/>*/}
                <div className={s.dialogbox__lines}>
                    <div className={s.dialogbox__line}/>
                    <div className={`${s.dialogbox__line} ${s.dialogbox__line_small}`}/>
                </div>
                <div className={s.dialogbox__speaker}>{speaker}</div>
                <div style={{transform: "scaleX(-1)"}} className={s.dialogbox__lines}>
                    <div className={s.dialogbox__line}/>
                    <div className={`${s.dialogbox__line} ${s.dialogbox__line_small}`}/>
                </div>
            </div>
            <pre className={s.dialogbox__body}>
                <TypingText text={text} timer={timer} setTimer={setTimer}/>
            </pre>
        </div>
    )
}

export default Box