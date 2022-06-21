import {FC, useEffect, useState} from "react";

import s from "./menu.module.sass"

import bg from "../../res/backgrounds/menu/main.jpg"
import logo from "../../res/backgrounds/menu/logo.svg"
import {stateGame} from "../interfaces/enums";
import StoreGame from "../stores/StoreGame";
import StoreStory from "../stores/StoreStory";
import {observer} from "mobx-react-lite";
import {localSave, storyI} from "../interfaces/interfaces";
import useGetAdaptiveClass from "../hooks/useGetAdaptiveClass";

enum stateWindow {
    MENU,
    SAVES
}

const Menu: FC = observer(() => {

    const isMenu = StoreGame.getStateGame() === stateGame.MENU

    const classAdaptive = useGetAdaptiveClass(s, "menu")

    const [menuWindow, setWindow] = useState<stateWindow>(stateWindow.MENU)

    return (
        <div className={`${s.menu} ${isMenu ? s.menu__active : ""} ${classAdaptive}`}>
            <img className={s.menu__background} src={bg}/>
            <div className={s.menu__center}>
                <img className={s.menu__logo} src={logo}/>
                <div className={s.menu__navigation}>
                    {menuWindow === stateWindow.MENU
                        ? <Main setWindow={setWindow}/>
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

const Saves = ({setWindow}: SavesProps) => {

    const onBack = () => {
        setWindow(stateWindow.MENU)
    }

    const onLoad = (story: storyI[], currentStory: storyI, storyPosition: number) => {
        StoreStory.loadStory(story, currentStory, storyPosition)
    }

    const saves: localSave[] = StoreStory.getLocalAllSaves().map((save: localSave, index: number) => {
        const onLoadSave = () => {
            onLoad(save.story, save.currentStory, save.storyPosition)
            StoreGame.setStateGame(stateGame.GAME)
        }

        return (
            <div key={index} onClick={onLoadSave} className={s.menu__button}>
                {save.date}
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
}

const Main = ({setWindow}: SavesProps) => {

    const isContinue: boolean = !!StoreStory.getLocalSaveState()
    const isSaves: boolean = StoreStory.getLocalAllSaves().length > 0

    const onNewGame = () => {
        StoreStory.initStoryDefault()
        StoreGame.setStateGame(stateGame.GAME)
    }

    const onStart = () => {
        StoreGame.setStateGame(stateGame.GAME)
    }

    const onNavigationSaves = () => {
        setWindow(stateWindow.SAVES)
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
            <div onClick={window.close} className={s.menu__button}>
                Выход
            </div>
        </>
    )
}

export default Menu