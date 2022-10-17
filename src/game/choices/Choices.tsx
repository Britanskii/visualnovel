import React, {FC} from "react";

import s from './choices.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../mobX/stores/StoreStory";
import useGetAdaptiveClass from "../hooks/useGetAdaptiveClass";
import Button from "../components/button/Button";
import allStories from "../../data/allStories";


const Choices: FC = observer(() => {

    const {getChoices, setStory} = StoreStory

    const choices = getChoices()

    const visible = choices.length > 0 && StoreStory.getComplete()

    const classAdaptive = useGetAdaptiveClass(s, "choices")

    return (
        <div className={`${s.choices} ${visible ? s.choices__visible : ""} ${classAdaptive}`}>
            {
                visible ? choices!.map(({text, story}, id) => {

                    //@ts-ignore
                    const onChoice = () => setStory(allStories[story]())

                    return (
                        <Button key={id} color="choice" onClick={onChoice}>
                            {text}
                        </Button>
                    )
                }) : null
            }
        </div>
    )

})

export default Choices