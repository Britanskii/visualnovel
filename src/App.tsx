import {FC, useEffect} from 'react'

import 'normalize.css'
import s from './app.module.sass'
import Game from "./game/Game";
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import StoreSettings from "./game/mobX/stores/StoreSettings";
import Portrait from "./game/portrait/Portrait";
//@ts-ignore plugin types do not exist
import ReactOrientation from 'react-orientation'
import Border from "./game/border/Border";

const App: FC = () => {

    const handle = useFullScreenHandle()

    StoreSettings.setFullscreenHandle(handle)

    return (
        <FullScreen handle={handle} className={s.app}>
            <ReactOrientation type="landscape">
                <Portrait/>
            </ReactOrientation>
            <Game/>
            <Border/>
        </FullScreen>
    )
}


export default App
