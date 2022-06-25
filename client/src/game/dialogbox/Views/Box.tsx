import {FC} from "react";
import s from "../dialogbox.module.sass";

import save from "../../../res/icons/save.svg"
import load from "../../../res/icons/load.svg"
import menu from "../../../res/icons/menu.svg"

import TypingText from "../TypingText";
import {game} from "../../interfaces/enums";
import useGetAdaptiveClass from "../../hooks/useGetAdaptiveClass";
import StoreGame from "../../mobX/stores/StoreGame";
import StoreStory from "../../mobX/stores/StoreStory";
import calcFullscreen from "../../functions/calcFullscreen";
import StoreSettings from "../../mobX/stores/StoreSettings";


// @ts-ignore
const Box: FC = ({onNext, speaker, text}) => {

    const classAdaptive = useGetAdaptiveClass(s, "dialogbox")
    const fontStyle = {}

    const onOpenMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        StoreGame.setStateGame(game.MENU)
    }

    const onFastSave = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        StoreStory.setSave(true)
    }

    const onFastLoad = () => {
        const allSaves = StoreStory.getSaves()
        const lastSave = allSaves[allSaves.length - 1]

        if (!!lastSave) StoreStory.loadStory(lastSave)
    }

    //development
    if (StoreSettings.getIsFullscreen()) {
        const {width} =  calcFullscreen()
        if (width < 720) {
            //@ts-ignore
            fontStyle.fontSize = width / 45
        }
    }


    return (
        <div onClick={onNext} className={`${s.dialogbox} ${classAdaptive} ${text.length === 0 ? s.dialogbox__hide : ""}`}>
            <div className={s.dialogbox__header}>
                <div className={s.dialogbox__navigation}>
                    <img onClick={onFastSave} className={s.dialogbox__icon} src={save} alt="Сохранить"/>
                    <img onClick={onFastLoad} className={s.dialogbox__icon} src={load} alt="Загрузить"/>
                    <img onClick={onOpenMenu} className={s.dialogbox__icon} src={menu} alt="Меню"/>
                </div>
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
            <pre style={fontStyle} className={s.dialogbox__body}>
                <TypingText text={text}/>
            </pre>
        </div>
    )
}

export default Box