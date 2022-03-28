import {FC, useEffect, useRef} from "react";

import s from './forefront.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../stores/StoreStory";

import {SpinePlayer} from "@esotericsoftware/spine-player";
import useSpineCharCreater from "../hooks/useSpineCharCreater/useSpineCharCreater";


const Forefront: FC = observer(() => {
    const refCanvas = useRef<HTMLCanvasElement>(null)

    const path = require("./assets/spineboy-pma.png")

    console.log(path)

    const arrChars = StoreStory.getChars()

    useEffect(() => {
        const spineboy = useSpineCharCreater("Spineboy", "run")

        console.log(spineboy)
    }, [])

    const chars = arrChars?.map((src, id) => {
        return (
            <img src={src} key = {id}/>
        )
    })

    return (
        <div id ={"front"} className={s.forefront}>
            {/*{chars}*/}
        </div>
    )
})

export default Forefront