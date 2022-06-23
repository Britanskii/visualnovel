import {Mark} from "../../../chars/chars";
import Ph2_2_2_3 from "./Ph2_2_2_3";
import Ph2_2_2_2_2 from "./Ph2_2_2_2_2";
import {choiceI, legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";

const Ph2_2_2_2 = toStory((): legend[] => {

    const photoChoice: choiceI[] = [
        {
            text: "Хм. Да, конечно, не вопрос.",
            story: Ph2_2_2_3()
        },
        {
            text: "Думаю, ты сам должен с этим справиться.",
            story: Ph2_2_2_2_2()
        }
    ]

    return [
        {
            id: 1,
            speaker: Mark.name,
            text: "Ты не мог бы… сказать ей об этом?",
            choice: photoChoice
        }
    ]
})

export default Ph2_2_2_2