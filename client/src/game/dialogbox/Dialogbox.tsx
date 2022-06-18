import {FC, useEffect, useState} from "react";

import s from './dialogbox.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../stores/StoreStory";

// @ts-ignore
import save from "../../res/icons/save.svg"
import ServiceSave from "../services/ServiceSave";
import Strings from "./Views/Strings";
import Box from "./Views/Box";
import {typeDialogbox} from "../interfaces/enums";

const Dialogbox: FC = observer(() => {
    const [timer, setTimer] = useState<NodeJS.Timer>()

    const {
        getText,
        getTypeDialogBox,
        setTypeDialogBox,
        incStoryPosition,
        getSpeaker,
        getNoChoice,
        setStory
    } = StoreStory

    const speaker = getSpeaker()
    const text: string = getText()
    const type: typeDialogbox = getTypeDialogBox()

    const onNext = () => {
        if (timer === undefined) {
            incStoryPosition()
            if (getNoChoice() !== undefined) {
                setStory(getNoChoice())
            }
        } else {
            clearInterval(timer)
            setTimer(undefined)
        }
    }

    useEffect(() => {
        const onSkip = (e: { key: string; }) => {
            if (e.key === "Control") {
                incStoryPosition()
            }
        }

        document.addEventListener("keydown", onSkip)

        return () => {
            document.removeEventListener("keydown", onSkip)
        }
    }, [])

    // useEffect(() => {
    //     console.log('change!')
    //     const changeDialogBox = (type: typeDialogbox) => {
    //         switch (type) {
    //             case typeDialogbox.STRINGS: // @ts-ignore
    //                 return <Strings onNext={onNext} onSave={onSave} speaker={speaker} text={text} timer={timer}
    //                                 setTimer={setTimer}/>
    //             default: // @ts-ignore
    //                 return <Box onNext={onNext} onSave={onSave} speaker={speaker} text={text} timer={timer}
    //                             setTimer={setTimer}/>
    //         }
    //     }
    //
    //     const view = changeDialogBox(type)
    //
    //     setView(view)
    // }, [text])

    const onSave = () => {
        const story = localStorage.getItem("story")
        const id = "1"

        ServiceSave.save({id, story})
    }


    return (
        <>
            <div className={s.dialogbox__next} onClick={onNext}/>

            {type === typeDialogbox.BOX ?
                // @ts-ignore
                <Box onNext={onNext} onSave={onSave} speaker={speaker} text={text} timer={timer} setTimer={setTimer}/>
                // @ts-ignore
                : <Strings onNext={onNext} onSave={onSave} speaker={speaker} text={text} timer={timer}
                           setTimer={setTimer}/>
            }
        </>
    )
})

export default Dialogbox