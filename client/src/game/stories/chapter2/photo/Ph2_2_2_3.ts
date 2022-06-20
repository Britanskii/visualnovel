import {backgroundsScene3} from "../../../interfaces/enums";
import {Mark, Player} from "../../../chars/chars";
import Ph2 from "./Ph2";
import Ph1_2 from "./Ph1_2.ts";
import Ph2_1 from "./Ph2_1";
import {storyI} from "../../../interfaces/interfaces";
import Scene4 from "../../scene4/Scene4";

const Ph2_2_2_3 = (): storyI[] => {

    const backgrounds = backgroundsScene3

    return [
        {
            id: 1,
            speaker: Mark.name,
            text: "Я бы хотел, чтобы ты донёс до неё мои чувства. Но если ещё и подскажешь что, я тоже не против!",
        },
        {
            id: 1,
            speaker: Player.name,
            text: "Замётано, дружище!  [Ещё некоторое время мы с Марком побеседовали и договорились, что я встречусь с Симной (та самая?) завтра.]",
            nochoice: Scene4()
        }
    ]
}

export default Ph2_2_2_3