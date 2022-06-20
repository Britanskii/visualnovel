import {FC, useState} from "react";

import s from "./menu.module.sass"

import bg from "../../res/backgrounds/menu/main.jpg"
import logo from "../../res/backgrounds/menu/logo.svg"
import {stateGame} from "../interfaces/enums";
import StoreGame from "../stores/StoreGame";
import StoreStory from "../stores/StoreStory";

enum stateWindow {
    MENU,
    SAVES
}

const Menu: FC = () => {

    const [menuWindow, setWindow] = useState<stateWindow>(stateWindow.MENU)

    return (
        <div className={s.menu}>
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
}

type SavesProps = {
    setWindow: (state: stateWindow) => void
}

const Saves = ({setWindow}: SavesProps) => {

    const onBack = () => {
        setWindow(stateWindow.MENU)
    }

    return (
        <>
            <div onClick={onBack} className={s.menu__button}>
                Вернуться назад
            </div>
            <div className={s.menu__button}>
                16.06.2022 16:24:41
            </div>
            <div className={s.menu__button}>
                16.06.2022 16:24:41
            </div>
            <div className={s.menu__button}>
                16.06.2022 16:24:41
            </div>
        </>
    )
}

const Main = ({setWindow}: SavesProps) => {

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
            <div onClick={onStart} className={s.menu__button}>
                Продолжить
            </div>
            {/*<div onClick={onNavigationSaves} className={s.menu__button}>*/}
            {/*    Загрузка*/}
            {/*</div>*/}
            <div onClick={window.close} className={s.menu__button}>
                Выход
            </div>
        </>
    )
}

export default Menu