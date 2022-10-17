import {legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";
import {backgroundsScene4} from "../../../../data/backgrounds";
import {Stick} from "../../../characters/characters";

const Tc2 = toStory((): legend[] => {

    return [
        {
            speaker: Stick.name,
            text: "Да? Жаль. (Снова обычное бесяче-жизнерадостное выражение) Но ведь ты всё равно ищешь что-то важное и тебе обязательно понадобится помощник, разве нет? Я буду очень полезным помощником, честно-пречестно!",
            nochoice: "Scene4_1"
        }
    ]
})

export default Tc2