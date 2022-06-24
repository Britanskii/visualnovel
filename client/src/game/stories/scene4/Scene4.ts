import {legend} from "../../interfaces/interfaces";
import toStory from "../../functions/toStory";
import {backgroundsScene3, backgroundsScene4} from "../../../data/backgrounds";
import StoreChoices from "../../mobX/stores/StoreChoices";
import {nameChoice} from "../../interfaces/choices";
import {Player} from "../../characters/chars";

const Scene4 = toStory((): legend[] => {

    const backgrounds = backgroundsScene4

    const choiceName = StoreChoices.nameChoice

    const name = choiceName === nameChoice.JOURNALIST ? "журналист" : choiceName === nameChoice.HUNTER ? "искатель сокровищ" : "робот-пришелец из космоса"

    return [
        {
            id: 1,
            text: "",
            characters: [],
            background: backgrounds.black
        },
        {
            id: 1,
            text: `Эгей! Привет, ${Player.name}!`,
            background: backgrounds.tavern
        },
        {
            id: 1,
            text: "Ты кто и откуда знаешь моё имя?"
        },
        {
            id: 1,
            text: `Я Стик! Тоже живу здесь. Вчера вечером подслушал твой разговор с… Марком кажется. Это правда, что ты ${name}?`
        }
    ]
})

export default Scene4
