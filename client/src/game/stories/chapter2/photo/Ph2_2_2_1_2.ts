
import { backgroundsScene3} from "../../../interfaces/enums";
import {Mark, Player} from "../../../chars/chars";
import Ph2 from "./Ph2";
import Ph1_2 from "./Ph1_2.ts";
import Ph2_2_2_1 from "./Ph2_2_2_1";
import Ph2_2_2_2 from "./Ph2_2_2_2";
import Ph2_2_2_3 from "./Ph2_2_2_3";
import {initStoryI} from "../../../interfaces/interfaces";

const Ph2_2_2_1_2 = (): initStoryI => {

    const backgrounds = backgroundsScene3

    return {
        backgrounds,
        history:  [
            {
                id: 1,
                speaker: Mark.name,
                text: "Завтра будет готово. ",
            }
        ]
    }
}

export default Ph2_2_2_1_2