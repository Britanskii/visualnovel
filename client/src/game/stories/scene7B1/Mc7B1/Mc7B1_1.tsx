import {Player, Simna} from "../../../characters/characters";
import {legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";

const Mc7B1_1 = toStory((): legend[] => {

    //const backgrounds =

    return [
        {
            speaker: Simna.name,
            text: "В самом лучшем?",
        },
        {
            speaker: Player.name,
            text: "И никак иначе.",
        },
        {
            speaker: Simna.name,
            text: "[приближение] Уговорил.",
            nochoice: "Scene7B1_9"
        },
    ]
})

export default Mc7B1_1