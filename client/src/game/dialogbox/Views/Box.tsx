import {FC} from "react";
import {observer} from "mobx-react-lite";
import s from "../dialogbox.module.sass";
// @ts-ignore
import save from "../../../../res/icons/save.svg";
import TypingText from "../TypingText";


// @ts-ignore
const Box: FC = ({onNext, onSave, speaker, text, timer, setTimer}) => {
 
    return (
        <div onClick={onNext} className={`${s.dialogbox} ${text.length === 0 ? s.dialogbox__hide : ""}`}>
            <div className={s.dialogbox__header}>
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
            <div className={s.dialogbox__body}>
                <TypingText text={text} timer={timer} setTimer={setTimer}/>
            </div>
        </div>
    )
}

export default Box