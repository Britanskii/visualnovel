import {legend} from "../../../interfaces/interfaces";
import {Simna} from "../../../characters/characters";
import toStory from "../../../functions/toStory";

const Ac7B1_1 = toStory((): legend[] => {

    //const backgrounds =

    return [
        {
            speaker: Simna.name,
            text: "Кое-что сумасшедшее…",
            choice: [
                {
                    text: "Ууу, звучит… многообещающе.",
                    story: "Bc7B1_1"
                },
                {
                    text: "Надеюсь, не слишком сумасшедшее.",
                    story: "Bc7B1_2"
                },
            ],
        },
    ]
})

export default Ac7B1_1