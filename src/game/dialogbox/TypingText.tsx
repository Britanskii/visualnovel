import {Ref, useEffect, useState} from "react";

//Написать пропсы
interface TestProps {
    timer: Ref<NodeJS.Timer>
}

//timer хранит в себе все props
const TypingText = (timer: Ref<NodeJS.Timer>) => {
    const [typeText, setTypeText] = useState<string>("")

    useEffect(() => {
        setTypeText("")
        let i = 0
        // @ts-ignore
        timer.current! = setInterval(() => {
            setTypeText(typeText => typeText += text[i])
            i++
            if (i === text.length) clearInterval(timer.current!)
        }, 10)

        return () => {
            clearInterval(timer.current!)
        }
    }, [text])


    return (
        <>
            {typeText}
        </>
    )
}

export default TypingText