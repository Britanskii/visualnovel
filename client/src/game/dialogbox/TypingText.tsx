import {Dispatch, FC, Ref, SetStateAction, useEffect, useState} from "react";
import StoreStory from "../stores/StoreStory";
import getIntervalTimeBySymbol from "../functions/getIntervalTimeBySymbol";

//Написать пропсы
interface TypingProps {
    text: string
}

//timer хранит в себе все props
const TypingText: FC<TypingProps> = ({text}) => {
    const [typeText, setTypeText] = useState<string>("")
    const [index, setIndex] = useState<number>(-1)

    useEffect(() => {
        StoreStory.setComplete(false)
        setTypeText("")
        setIndex(0)
    }, [text])

    useEffect(() => {
        if ((typeText.length < text.length || typeText !== text) && text !== "") {
            if (!!text[index]) {
                const interval = getIntervalTimeBySymbol(text[index - 1])
                setTimeout(() => {
                    setTypeText(typeText => typeText += text[index])
                    setIndex(index => index += 1)
                }, interval)
            }
        } else {
            setIndex(0)
            setTypeText(text)
            StoreStory.setComplete(true)
        }
    }, [text, index])

    useEffect(() => {
        if (StoreStory.getComplete()) {
            setTypeText(text)
        }
    }, [StoreStory.getComplete()])

    return (
        <>
            {typeText}
        </>
    )
}

export default TypingText