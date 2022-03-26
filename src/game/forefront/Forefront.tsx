import {FC, useEffect, useRef} from "react";

import s from './forefront.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../stores/StoreStory";

import json from "../../res/chars/spineboy/spineboy-ess.json"

import {
    AnimationState, AnimationStateData,
    AssetManager,
    AtlasAttachmentLoader,
    Skeleton,
    SkeletonJson,
    SkeletonRenderer
} from "@esotericsoftware/spine-canvas"
import useSpineCharCreater from "../hooks/useSpineCharCreater/useSpineCharCreater";


const Forefront: FC = observer(() => {
    const refCanvas = useRef<HTMLCanvasElement>(null)

    const arrChars = StoreStory.getChars()



    const {animationState} = useSpineCharCreater("Spineboy", "run")

    useEffect(() => {
        // animationState.setAnimation(0, "jump", false)
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