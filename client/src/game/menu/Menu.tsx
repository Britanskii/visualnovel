import {FC, useEffect, useState} from "react";

import s from "./menu.module.sass"

import bg from "../../res/backgrounds/menu/main.jpg"
import logo from "../../res/backgrounds/menu/logo.svg"
import garbage from "../../res/icons/garbage.svg"
import arrow from "../../res/icons/arrow.svg"
import {game, textSpeedState} from "../interfaces/enums";
import StoreGame from "../mobX/stores/StoreGame";
import StoreStory from "../mobX/stores/StoreStory";
import {observer} from "mobx-react-lite";
import {legend, localSave, storyI} from "../interfaces/interfaces";
import useGetAdaptiveClass from "../hooks/useGetAdaptiveClass";
import useImagesOnLoad from "../hooks/useImagesOnLoad";
import LocalSave from "../mobX/entities/LocalSave";
import {toJS} from "mobx";
import StoreSettings from "../mobX/stores/StoreSettings";
import {MouseParallaxChild, MouseParallaxContainer} from "react-parallax-mouse";
import Forefront from "../forefront/Forefront";
import Background from "../background/Background";

enum stateWindow {
    MENU,
    SAVES,
    SETTINGS
}

const Menu: FC = observer(() => {
    const isMenu = StoreGame.getStateGame() === game.MENU

    const classAdaptive = useGetAdaptiveClass(s, "menu")

    const [menuWindow, setWindow] = useState<stateWindow>(stateWindow.MENU)

    useImagesOnLoad([logo, bg])

    return (
        <div className={`${s.menu} ${isMenu ? s.menu__active : ""} ${classAdaptive}`}>
            {/*<MouseParallaxContainer enabled={true} useWindowMouseEvents={true} className={s.container}>*/}
            {/*    <MouseParallaxChild factorX={0.005}>*/}
                    <img className={s.menu__background} src={bg}/>
            {/*    </MouseParallaxChild>*/}
            {/*</MouseParallaxContainer>*/}
            <div className={s.menu__center}>
                <img className={s.menu__logo} src={logo}/>
                <div className={s.menu__navigation}>
                    {menuWindow === stateWindow.MENU
                        ? <Main setWindow={setWindow}/>
                        : menuWindow === stateWindow.SETTINGS
                            ? <Settings setWindow={setWindow}/>
                            : <Saves setWindow={setWindow}/>
                    }
                </div>
            </div>
        </div>
    )
})

type SavesProps = {
    setWindow: (state: stateWindow) => void
}

const Main = ({setWindow}: SavesProps) => {

    const isContinue: boolean = LocalSave.isSaveStateHave()
    const isSaves: boolean = LocalSave.isSavesHave()

    const onNewGame = () => {
        StoreStory.initStoryDefault()
        StoreGame.setStateGame(game.GAME)
    }

    const onStart = () => {
        StoreGame.setStateGame(game.GAME)
    }

    const onNavigationSaves = () => {
        setWindow(stateWindow.SAVES)
    }

    const onNavigationSettings = () => {
        setWindow(stateWindow.SETTINGS)
    }

    return (
        <>
            <div onClick={onNewGame} className={s.menu__button}>
                Новая игра
            </div>
            {isContinue &&
            <div onClick={onStart} className={s.menu__button}>
                Продолжить
            </div>}
            {isSaves &&
            <div onClick={onNavigationSaves} className={s.menu__button}>
                Загрузка
            </div>}
            <div onClick={onNavigationSettings} className={s.menu__button}>
                Настройки
            </div>
            <div onClick={window.close} className={s.menu__button}>
                Выход
            </div>
        </>
    )
}

const Saves = observer(({setWindow}: SavesProps) => {

    const onBack = () => {
        setWindow(stateWindow.MENU)
    }

    const onLoad = (story: storyI, currentStory: legend, storyPosition: number) => {
        StoreStory.loadStory(story, currentStory, storyPosition)
    }

    const saves = StoreStory.getSaves().map((save: localSave) => {

        const onLoadSave = () => {
            onLoad(save.story, save.currentStory, save.storyPosition)
            StoreGame.setStateGame(game.GAME)
        }

        const onDelete = (event: React.MouseEvent<HTMLImageElement>) => {
            event.stopPropagation()
            LocalSave.deleteSave(save.id)

            if (StoreStory.getSaves().length === 0) onBack()
        }

        return (
            <div key={save.id} onClick={onLoadSave} className={s.menu__button}>
                <div className={s.menu__save}>
                    {save.date}
                    <img onClick={onDelete} className={s.menu__garbage} src={garbage} alt="Удалить"/>
                </div>
            </div>
        )
    })

    return (
        <>
            <div onClick={onBack} className={s.menu__button}>
                Вернуться назад
            </div>
            {saves}
        </>
    )
})

const Settings = observer(({setWindow}: SavesProps) => {

    const {getIsFullscreen, getIsPunctuationMode, toggleIsFullscreen, toggleIsPunctuationMode} = StoreSettings

    const isFullscreen = getIsFullscreen()

    const isPunctuationMode = getIsPunctuationMode()

    const onBack = () => {
        setWindow(stateWindow.MENU)
    }

    const arraySpeeds = [{name: "Медленно", state: textSpeedState.SLOW}, {name: "Умеренно", state: textSpeedState.MEDIUM}, {name: "Быстро", state: textSpeedState.FAST}]

    const speeds = arraySpeeds.map(({name, state}) => {

        const active = state === StoreSettings.getTextSpeedState() ? s.menu__naked_active : ""

        const setSpeedTextState = () => {
            StoreSettings.setTextSpeedState(state)
        }

        return (
            <div onClick={setSpeedTextState} className={`${s.menu__naked} ${active}`}>
                {name}
            </div>
        )
    })

    return (
        <>
            <div onClick={onBack} className={s.menu__button}>
                Вернуться назад
            </div>
            <div className={s.menu__list}>
                <div className={`${s.menu__button} ${s.menu__button_disabled}`}>
                    Скорость текста
                </div>
                {speeds}
            </div>
            <div onClick={toggleIsPunctuationMode} className={s.menu__button}>
                <div>Режим пунктуации</div>
                <div className={`${s.menu__checkbox} ${s.menu__checkbox_active}`}>
                    {isPunctuationMode ? <img className={s.menu__arrow} src={arrow}/> : ""}
                </div>
            </div>
            <div onClick={toggleIsFullscreen} className={s.menu__button}>
                <div>Режим Full Screen</div>
                <div className={`${s.menu__checkbox} ${s.menu__checkbox_active}`}>
                    {isFullscreen ? <img className={s.menu__arrow} src={arrow}/> : ""}
                </div>
            </div>
        </>
    )
})

export default Menu