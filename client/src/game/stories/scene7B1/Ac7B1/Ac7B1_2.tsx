import Scene7B1_9 from "../Scene7B1_9";
import {legend} from "../../../interfaces/interfaces";
import {Simna} from "../../../characters/characters";
import toStory from "../../../functions/toStory";

const Ac7B1_2 = toStory((): legend[] => {

    //const backgrounds =

    return [
        {
            speaker: Simna.name,
            text: "Раз ты так считаешь…",
            nochoice: "Scene7B1_9"
        },
    ]
})

export default Ac7B1_2