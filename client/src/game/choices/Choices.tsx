import {FC, useEffect, useState} from "react";

import s from './choices.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../stores/StoreStory";
import {toJS} from "mobx";
import useGetAdaptiveClass from "../hooks/useGetAdaptiveClass";


const Choices: FC = observer(() => {

    const {getChoices, setStory} = StoreStory

    const choices = getChoices()

    const visible = choices.length > 0 && StoreStory.getComplete()

    const classAdaptive = useGetAdaptiveClass(s, "choices")

    return (
        <div className={`${s.choices} ${visible ? s.choices__visible : ""} ${classAdaptive}`}>
            {
                visible ? choices!.map(({text, story}, id) => {

                    const onChoice = () => setStory(story)

                    return (
                        <div key={id}
                             onClick={onChoice}
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