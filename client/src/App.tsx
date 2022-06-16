import {FC} from 'react'

import 'normalize.css'
import s from './app.module.sass'
import Game from "./game/Game";

const App: FC = () => {

    return (
        <div className={s.app}>
            <Game/>
        </div>
    )
}


export default App
