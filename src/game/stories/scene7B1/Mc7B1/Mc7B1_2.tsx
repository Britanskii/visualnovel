import {legend} from "../../../interfaces/interfaces";
import {Simna} from "../../../characters/characters";
import toStory from "../../../functions/toStory";

const Mc7B1_2 = toStory((): legend[] => {

    //const backgrounds =

    return [
        {
            speaker: Simna.name,
            text: "Романтик из тебя так себе. Ладно, идём скорее пока нас случайно не обнаружили.",
            nochoice: "Scene7B1_9"
        },
    ]
})

export default Mc7B1_2