import {FC, useEffect, useState} from "react";

import s from './choices.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../stores/StoreStory";
import {toJS} from "mobx";
import useGetAdaptiveClass from "../hooks/useGetAdaptiveClass";


const Choices: FC = observer(() => {

    const {getChoices, setStory} = StoreStory

    const [show, setShow] = useState<boolean>(false)
    // const [choices, setChoices] = useState<[]>([])

    const choices = getChoices()

    const visible = show && choices !== undefined && StoreStory.getComplete()

    const classAdaptive = useGetAdaptiveClass(s, "choices")

    useEffect(() => {
        if (choices !== undefined) {
            if (choices.length > 0) {
                setShow(true)
                StoreStory.setIsChoice(!!choices)
            }
        } else {
            setShow(false)
            StoreStory.setIsChoice(false)
        }
    }, [choices])

    return (
        <div className={`${s.choices} ${visible ? s.choices__visible : ""} ${classAdaptive}`}>
            {
                visible ? choices!.map(({text, story}, id) => {
                    return (
                        <div key={id}
                             onClick={() => setStory(story)}
                             className={s.choices__select}>
                            {text}
                        </div>
                    )
                }) : null
            }
        </div>
    )

})

export default Choices