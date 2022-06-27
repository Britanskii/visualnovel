import {legend} from "../../../interfaces/interfaces";
import {Simna} from "../../../characters/characters";
import toStory from "../../../functions/toStory";

const Lc7B1_2 = toStory((): legend[] => {

    //const backgrounds =

    return [
        {
            speaker: Simna.name,
            text: "Продолжай.",
            choice: [
                {
                    text: "Сумасшедшая.",
                    story: "Oc7B1_1"
                },
                {
                    text: "Интригующая.",
                    story: "Oc7B1_2"
                },
            ],
        },
    ]
})

export default Lc7B1_2