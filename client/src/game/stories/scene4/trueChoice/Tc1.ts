import {legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";
import {backgroundsScene4} from "../../../../data/backgrounds";
import {Stick} from "../../../characters/characters";

const Tc1 = toStory((): legend[] => {

    return [
        {
            speaker: Stick.name,
            text: "Ух ты! Звучит очень интересно! А можно мне с тобой? Я знаю Сигму как свои пять пальцев [показывает десять]! Я буду очень полезным помощником, честно-пречестно!",
            nochoice: "Scene4_1"
        }
    ]
})

export default Tc1