import {Player, Simna} from "../../../characters/characters";
import Scene7B1_8 from "../Scene7B1_8";
import {legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";

const Oc7B1_2 = toStory((): legend[] => {

    //const backgrounds =

    return [
        {
            speaker: Simna.name,
            text: "[приближение] Интригующая?",
        },
        {
            speaker: Player.name,
            text: "Желанная.",
        },
        {
            speaker: Simna.name,
            text: "[приближение] Желанная - это хорошо. Не останавливайся.",
        },
        {
            speaker: Player.name,
            text: "Ни. За. Что.",
            nochoice: "Scene7B1_8"
        },
    ]
})

export default Oc7B1_2