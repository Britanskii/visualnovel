import {FC} from "react";
import s from "../dialogbox.module.sass";

import save from "../../../res/icons/save.svg"
import load from "../../../res/icons/load.svg"
import menu from "../../../res/icons/menu.svg"
import eye from "../../../res/icons/eye.svg"
import settings from "../../../res/icons/settings.svg"

import TypingText from "../TypingText";
import {game} from "../../interfaces/enums";
import useGetAdaptiveClass from "../../hooks/useGetAdaptiveClass";
import StoreGame from "../../mobX/stores/StoreGame";
import StoreStory from "../../mobX/stores/StoreStory";
import calcFullscreen from "../../functions/calcFullscreen";
import StoreSettings from "../../mobX/stores/StoreSettings";
import {observer} from "mobx-react-lite";


// @ts-ignore
const Box: FC = observer(({onNext, speaker, text}) => {

    const classAdaptive = useGetAdaptiveClass(s, "dialogbox")
    const fontStyle = {}

    const onOpenMenu = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        StoreGame.setStateGame(game.MENU)
    }

    const onOpenSettings = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
        StoreGame.setStateGame(game.SETTINGS)
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

    const onHideMenu = (event: React.MouseEvent<HTMLImageElement>) => {
        event.stopPropagation()
        StoreGame.setIsPicture(true)
    }

    // //development
    // if (StoreSettings.getIsFullscreen()) {
    //     const {width} =  calcFullscreen()
    //     if (width < 720) {
    //         //@ts-ignore
    //         fontStyle.fontSize = width / 45
    //     }
    // }

    const hide = text.length === 0 || StoreGame.getIsPicture()

    return (
        <div onClick={onNext} className={`${s.dialogbox} ${classAdaptive} ${hide ? s.dialogbox__hide : ""}`}>
            <div className={s.dialogbox__header}>
                <div className={s.dialogbox__navigation}>
                    <img onClick={onFastSave} className={s.dialogbox__icon} src={save} alt="Сохранить"/>
                    <img onClick={onFastLoad} className={s.dialogbox__icon} src={load} alt="Загрузить"/>
                    {/*<img onClick={onOpenSettings} className={s.dialogbox__icon} src={settings} alt="Настройки"/>*/}
                    <img onClick={onHideMenu} className={s.dialogbox__icon} src={eye} alt="Режим галлереи"/>
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
})

export default Box