import {legend} from "../../../interfaces/interfaces";
import {Simna} from "../../../characters/characters";
import toStory from "../../../functions/toStory";

const Oc7B1_1 = toStory((): legend[] => {

    //const backgrounds =

    return [
        {
            speaker: Simna.name,
            text: "Сумасшедшая? Да уж. Такого не ожидала.",
            choice: [
                {
                    text: "В лучшем смысле этого слова.",
                    story: "Mc7B1_1"
                },
                {
                    text: "Да, просто безбашенная.",
                    story: "Mc7B1_2"
                },
            ],
        },
    ]
})

export default Oc7B1_1