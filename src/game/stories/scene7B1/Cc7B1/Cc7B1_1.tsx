import {legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";
import {Simna} from "../../../characters/characters";

const Cc7B1_1 = toStory((): legend[] => {

    //const backgrounds =

    return [
        {
            speaker: Simna.name,
            text: "Правда? Какой льстец. Ты тоже ничего так. ",
            choice: [
                {
                    text: "Спасибо. Польщён не меньше твоего. ",
                    story: "Lc7B1_1"
                },
                {
                    text: "Такая яркая, такая энергичная.",
                    story: "Lc7B1_2"
                },
            ],
        },
    ]
})

export default Cc7B1_1