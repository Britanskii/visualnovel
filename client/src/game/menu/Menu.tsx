import {FC, useEffect, useState} from "react";

import s from "./menu.module.sass"

import bg from "../../res/backgrounds/menu/main.jpg"
import logo from "../../res/backgrounds/menu/logo.svg"
import garbage from "../../res/icons/garbage.svg"
import {stateGame} from "../interfaces/enums";
import StoreGame from "../mobX/stores/StoreGame";
import StoreStory from "../mobX/stores/StoreStory";
import {observer} from "mobx-react-lite";
import {legend, localSave, storyI} from "../interfaces/interfaces";
import useGetAdaptiveClass from "../hooks/useGetAdaptiveClass";
import useImagesOnLoad from "../hooks/useImagesOnLoad";
import LocalSave from "../mobX/entities/LocalSave";
import {toJS} from "mobx";

enum stateWindow {
    MENU,
    SAVES
}

const Menu: FC = observer(() => {
    const isMenu = StoreGame.getStateGame() === stateGame.MENU

    const classAdaptive = useGetAdaptiveClass(s, "menu")

    const [menuWindow, setWindow] = useState<stateWindow>(stateWindow.MENU)

    useImagesOnLoad([logo, bg])

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

const Main = ({setWindow}: SavesProps) => {

    const isContinue: boolean = LocalSave.isSaveStateHave()
    const isSaves: boolean = LocalSave.isSavesHave()

    console.log(isContinue)

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
            StoreGame.setStateGame(stateGame.GAME)
        }

        const onDelete = (event: React.MouseEvent<HTMLImageElement>) => {
            event.stopPropagation()
            LocalSave.deleteSave(save.id)
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

export default Menu