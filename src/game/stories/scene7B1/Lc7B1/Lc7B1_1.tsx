import {legend} from "../../../interfaces/interfaces";
import {Simna} from "../../../characters/characters";
import toStory from "../../../functions/toStory";

const Lc7B1_1 = toStory((): legend[] => {

    //const backgrounds =

    return [
        {
            speaker: Simna.name,
            text: "И что дальше?",
            choice: [
                {
                    text: "Пойдём, пока нас не обнаружили.",
                    story: "Ic7B1_1"
                },
                {
                    text: "Есть одна интересная идейка.",
                    story: "Ic7B1_2"
                },
            ],
        },
    ]
})

export default Lc7B1_1