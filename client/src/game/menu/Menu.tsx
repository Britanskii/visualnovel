import {FC, useEffect, useState} from "react";

import s from "./menu.module.sass"

import background from "../../res/menu/main.jpg"
import logo from "../../res/menu/logo.svg"
import garbage from "../../res/icons/garbage.svg"
import arrow from "../../res/icons/arrow.svg"
import {game} from "../interfaces/enums";
import StoreGame from "../mobX/stores/StoreGame";
import StoreStory from "../mobX/stores/StoreStory";
import {observer} from "mobx-react-lite";
import {legend, localSave, storyI} from "../interfaces/interfaces";
import useGetAdaptiveClass from "../hooks/useGetAdaptiveClass";
import useImagesOnLoad from "../hooks/useImagesOnLoad";
import LocalSave from "../mobX/entities/LocalSave";
import StoreSettings from "../mobX/stores/StoreSettings";
import Button from "../components/button/Button";
import ButtonDropdown from "../components/ButtonDropdown/ButtonDropdown";

enum stateWindow {
    MENU,
    SAVES,
    SETTINGS
}

const Menu: FC = observer(() => {
    const [stateWindowMenu, setStateWindowMenu] = useState(stateWindow.MENU)
    const isMenu = StoreGame.getStateGame() === game.MENU || StoreGame.getStateGame() === game.SETTINGS

    const classAdaptive = useGetAdaptiveClass(s, "menu")


    // useEffect(() => {
    //     const stateWindowMenu: stateWindow = StoreGame.getStateGame() === game.MENU ? stateWindow.MENU : stateWindow.SETTINGS
    //
    //     setStateWindowMenu(stateWindowMenu)
    // }, [isMenu])

    const [menuWindow, setWindow] = useState<stateWindow>(stateWindowMenu)

    useImagesOnLoad([logo, background])

    return (
        <div className={`${s.menu} ${isMenu ? s.menu__active : ""} ${classAdaptive}`}>
            {/*<MouseParallaxContainer enabled={true} useWindowMouseEvents={true} className={s.container}>*/}
            {/*    <MouseParallaxChild factorX={0.005}>*/}
                    <img className={s.menu__background} src={background}/>
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
            <Button onClick={onNewGame}>
                Новая игра
            </Button>
            {isContinue &&
            <Button onClick={onStart}>
                Продолжить
            </Button>}
            {isSaves &&
            <Button onClick={onNavigationSaves}>
                Загрузка
            </Button>}
            <Button onClick={onNavigationSettings}>
                Настройки
            </Button>
            <Button onClick={window.close}>
                Выход
            </Button>
        </>
    )
}

const Saves = observer(({setWindow}: SavesProps) => {

    const onBack = () => {
        setWindow(stateWindow.MENU)
    }

    const saves = StoreStory.getSaves().map((save: localSave) => {

        const onLoadSave = () => {
            StoreStory.loadStory(save)
            StoreGame.setStateGame(game.GAME)
            setTimeout(() => setWindow(stateWindow.MENU),  300)
        }

        const onDelete = (event: React.MouseEvent<HTMLImageElement>) => {
            event.stopPropagation()
            LocalSave.deleteSave(save.id)

            if (StoreStory.getSaves().length === 0) onBack()
        }

        return (
            <Button key={save.id} onClick={onLoadSave}>
                <div className={s.menu__save}>
                    {save.date}
                    <img onClick={onDelete} className={s.menu__garbage} src={garbage} alt="Удалить"/>
                </div>
            </Button>
        )
    })

    return (
        <>
            <Button onClick={onBack}>
                Вернуться назад
            </Button>
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

    return (
        <>
            <Button onClick={onBack}>
                Вернуться назад
            </Button>
            <ButtonDropdown/>
            <Button onClick={toggleIsPunctuationMode}>
                <div>Режим пунктуации</div>
                <div className={`${s.menu__checkbox} ${isPunctuationMode ? s.menu__checkbox_active : ""}`}>
                    <img className={`${s.menu__arrow} ${isPunctuationMode ? s.menu__arrow_active : ""}`} src={arrow}/>
                </div>
            </Button>
            <Button onClick={toggleIsFullscreen}>
                <div>Режим Full Screen</div>
                <div className={`${s.menu__checkbox} ${isFullscreen ? s.menu__checkbox_active : ""}`}>
                   <img className={`${s.menu__arrow} ${isFullscreen ? s.menu__arrow_active : ""}`} src={arrow}/>
                </div>
            </Button>
        </>
    )
})

export default Menu