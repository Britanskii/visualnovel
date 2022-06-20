import {FC} from "react";

import s from './forefront.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../stores/StoreStory";
import {Simna} from "../chars/chars";
import getCharacterNameByImg from "../functions/getCharacterNameByImg";

const Forefront: FC = observer(() => {

    const arrChars = StoreStory.getChars()

    const chars = arrChars?.map((src) => {

        const id = getCharacterNameByImg(src).toLocaleLowerCase()

        return (
            <img className={id == "character" ? s.forefront__character : `${s.forefront__character} ${s["forefront__" + id]}`} src={src}/>
        )
    })

    return (
        <div id ={"front"} className={s.forefront}>
            {chars}
        </div>
    )
})

export default Forefront