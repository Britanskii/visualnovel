import {FC, useEffect} from 'react'

import 'normalize.css'
import s from './app.module.sass'
import Game from "./game/Game";
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import StoreSettings from "./game/mobX/stores/StoreSettings";
import Portrait from "./game/portrait/Portrait";
//@ts-ignore У данного плагина отсутствуют типы
import ReactOrientation from 'react-orientation'

const App: FC = () => {

    const handle = useFullScreenHandle()

    StoreSettings.setFullscreenHandle(handle)

    return (
        <FullScreen handle={handle} className={s.app}>
            <ReactOrientation type="landscape">
                <Portrait/>
            </ReactOrientation>
            <Game/>
        </FullScreen>
    )
}


export default App
