import {FC} from 'react'

import 'normalize.css'
import s from './app.module.sass'
import Game from "./game/Game";
import {FullScreen, useFullScreenHandle} from "react-full-screen";
import StoreSettings from "./game/mobX/stores/StoreSettings";

const App: FC = () => {

    const handle = useFullScreenHandle()

    StoreSettings.setFullscreenHandle(handle)

    return (
        <FullScreen handle={handle} className={s.app}>
            <Game/>
        </FullScreen>
    )
}


export default App
