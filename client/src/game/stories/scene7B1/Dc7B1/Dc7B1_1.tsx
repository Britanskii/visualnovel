import Scene7B1_9 from "../Scene7B1_9";
import {legend} from "../../../interfaces/interfaces";
import {Simna} from "../../../characters/characters";
import toStory from "../../../functions/toStory";

const Dc7B1_1 = toStory((): legend[] => {

    //const backgrounds =

    return [
        {
            speaker: Simna.name,
            text: "Романтик из тебя так себе. Ладно, идём скорее пока нас случайно не обнаружили.",
            nochoice: "Scene7B1_9"
        },
    ]
})

export default Dc7B1_1