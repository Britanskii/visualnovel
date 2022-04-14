import {FC} from "react";

import s from './background.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../stores/StoreStory";

const Background: FC = observer(() => {

    const bg = StoreStory.getBackground()

    console.log(bg)

    return (
        <img src={bg} className={s.background}/>
    )
})

export default Background