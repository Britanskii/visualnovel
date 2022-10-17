import {legend} from "../../../interfaces/interfaces";
import {Simna} from "../../../characters/characters";
import toStory from "../../../functions/toStory";

const Cc7B1_2 = toStory((): legend[] => {

    //const backgrounds =

    return [
        {
            speaker: Simna.name,
            text: "Ещё бы! Только месть не совершена до конца.",
            choice: [
                {
                    text: "Да? И что же ещё ты задумала?",
                    story: "Ac7B1_1"
                },
                {
                    text: "А по-моему нам пора уходить.",
                    story: "Ac7B1_2"
                },
            ],
        },
    ]
})

export default Cc7B1_2