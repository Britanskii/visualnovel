import {FC, useEffect, useState} from "react";

import s from './choices.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../stores/StoreStory";
import {toJS} from "mobx";


const Choices: FC = observer(() => {

    const {getChoices, setStory} = StoreStory

    const [show, setShow] = useState<boolean>(false)
    // const [choices, setChoices] = useState<[]>([])

    const choices = getChoices()

    const visible = show && choices !== undefined && StoreStory.getComplete()

    useEffect(() => {
        if (choices !== undefined) {
            if (choices.length > 0) {
                setShow(true)
            }
        } else {
            setShow(false)
        }
    }, [choices])

    // const onChoice = (story) => {
    //     setShow(false)
    //
    //     props.setStoryPosition(0)
    //     props.setMainStory(story)
    // }
    //
    // useEffect(() => {
    //     if (props.choice) {
    //
    //         if (props.choice.length) setShow(true)
    //
    //         console.log(props.choice)
    //
    //         setChoices(props.choice.map(({text, story}, id) => {
    //             return <div key={id} onClick={() => onChoice(story)} className={s.choices__select}>{text}</div>
    //         }))
    //     }
    // }, [props.choice])


    return (
        <div className={`${s.choices} ${visible ? s.choices__visible : ""}`}>
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