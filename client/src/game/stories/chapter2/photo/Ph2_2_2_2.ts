
import { backgroundsScene3} from "../../../interfaces/enums";
import {Mark, Player} from "../../../chars/chars";
import Ph2 from "./Ph2";
import Ph1_2 from "./Ph1_2.ts";
import Ph2_1 from "./Ph2_1";
import Ph2_2_2_3 from "./Ph2_2_2_3";
import Ph2_2_2_2_2 from "./Ph2_2_2_2_2";

const Ph2_2_2_2 = (): initStoryI => {

    const backgrounds = backgroundsScene3

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

    return {
        backgrounds,
        history:  [
            {
                id: 1,
                text: "Ты не мог бы… сказать ей об этом?",
                choice: photoChoice
            }
        ]
    }
}

export default Ph2_2_2_2