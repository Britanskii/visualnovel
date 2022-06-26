import {Player, Simna} from "../../../characters/characters";
import {legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";

const Bc7B1_1 = toStory((): legend[] => {

    //const backgrounds =

    return [
        {
            speaker: Simna.name,
            text: "[приближение] Я знала, что ты оценишь.",
        },
        {
            speaker: Player.name,
            text: "Непременно",
            nochoice: "Scene7B1_8"
        },
    ]
})

export default Bc7B1_1