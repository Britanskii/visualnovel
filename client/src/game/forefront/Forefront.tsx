import {FC} from "react";

import s from './forefront.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../stores/StoreStory";

const Forefront: FC = observer(() => {

    const arrChars = StoreStory.getChars()

    const chars = arrChars?.map((src, id) => {


        return (
            <img className={s.forefront__character} src={src} key = {id}/>
        )
    })

    return (
        <div id ={"front"} className={s.forefront}>
            {chars}
        </div>
    )
})

export default Forefront