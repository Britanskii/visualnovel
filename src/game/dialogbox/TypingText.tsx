import {Dispatch, FC, Ref, SetStateAction, useEffect, useState} from "react";
import StoreStory from "../stores/StoreStory";

//Написать пропсы
interface TypingProps {
    timer: NodeJS.Timer | undefined
    setTimer: Dispatch<SetStateAction<NodeJS.Timer | undefined>>
    text: string
}

//timer хранит в себе все props
const TypingText: FC<TypingProps> = ({timer, text, setTimer}) => {
    const [typeText, setTypeText] = useState<string>("")

    // debugger

    useEffect(() => {
        StoreStory.setComplete(false)
        setTypeText("")
        let i = 0

        if (!!text[i]) {
            let interval = 10

            const timer = setInterval(() => {
                setTypeText(typeText => typeText += text[i])
                i++
                if (i > 25) {
                    interval = 1000
                }
                if (i === text.length) {
                    clearInterval(timer as NodeJS.Timeout)
                    setTimer(undefined)
                    StoreStory.setComplete(true)
                }
            }, interval)
            setTimer(timer)
        }


        return () => {
            clearInterval(timer as NodeJS.Timeout)
        }
    }, [text])

    useEffect(() => {
        if (timer === undefined && typeText !== "") {
            setTypeText(text)
            StoreStory.setComplete(true)
        }
    }, [timer])

    return (
        <>
            {typeText}
        </>
    )
}

export default TypingText