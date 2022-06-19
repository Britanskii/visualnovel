
import { backgroundsScene3} from "../../../interfaces/enums";
import {Mark, Player} from "../../../chars/chars";
import Ph2 from "./Ph2";
import Ph1_2 from "./Ph1_2.ts";

const Ph2_1 = (): initStoryI => {

    const backgrounds = backgroundsScene3

    return {
        backgrounds,
        history:  [
            {
                id: 1,
                text: " Тогда жду тебя завтра.",
            }
        ]
    }
}

export default Ph2_1