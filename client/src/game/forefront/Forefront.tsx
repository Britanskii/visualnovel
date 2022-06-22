import {FC, useEffect, useState} from "react";

import s from './forefront.module.sass'
import {observer} from "mobx-react-lite";
import StoreStory from "../stores/StoreStory";
import getCharacterIdByIamge from "../functions/getCharacterIdByIamge";
import {toJS} from "mobx";
import useImagesOnLoad from "../hooks/useImagesOnLoad";

const Forefront: FC = observer(() => {
    const [imagesLoaded, setImagesLoaded] = useState<[]>([])

    const story = StoreStory.getStory()
    const arrayOfCharacters = StoreStory.getChars()

    const characters = arrayOfCharacters?.map((src) => {

        const id = getCharacterIdByIamge(src).toLocaleLowerCase()

        return (
            <img alt = {id} key = {id} className={id == "character" ? s.forefront__character : `${s.forefront__character} ${s["forefront__" + id]}`} src={src}/>
        )
    })

    useEffect(() => {
        const position = StoreStory.getStoryPosition()

        for (let index = position; index < story.legend.length; index++ ) {
            const characters = story.legend[index + 1]?.characters
            if (!!characters) {
                characters.forEach((source) => {
                    // @ts-ignore
                    if (imagesLoaded.indexOf(source)) {
                        // @ts-ignore
                        setImagesLoaded(imagesLoaded => imagesLoaded = [...imagesLoaded, source])
                    }
                })
            }
        }
    }, [story])

    useImagesOnLoad(imagesLoaded)

    return (
        <div id ={"front"} className={s.forefront}>
            {characters}
        </div>
    )
})

export default Forefront