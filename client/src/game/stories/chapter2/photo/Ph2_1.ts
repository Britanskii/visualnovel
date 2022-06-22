import {backgroundsScene3} from "../../../interfaces/enums";
import {Mark, Player} from "../../../chars/chars";
import Ph2 from "./Ph2";
import Ph1_2 from "./Ph1_2.ts";
import {legend, storyI} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";

const Ph2_1 = toStory((): legend[] => {

    return [
        {
            id: 1,
            text: " Тогда жду тебя завтра.",
        }
    ]
})

export default Ph2_1