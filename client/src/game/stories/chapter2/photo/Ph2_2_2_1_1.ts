
import { backgroundsScene3} from "../../../interfaces/enums";
import {Mark, Player} from "../../../chars/chars";
import Ph2 from "./Ph2";
import Ph1_2 from "./Ph1_2.ts";
import Ph2_1 from "./Ph2_1";
import {initStoryI} from "../../../interfaces/interfaces";

const Ph2_2_2_1_1 = (): initStoryI => {

    const backgrounds = backgroundsScene3

    return {
        backgrounds,
        history:  [
            {
                id: 1,
                text: "Хватит! Плати деньги и проваливай. Завтра отдам тебе твои копии.",
            },
            {
                id: 1,
                speaker: Player.name,
                text: "А можно просто сфотографировать?",
            },
            {
                id: 1,
                speaker: Mark.name,
                text: "Можно, если есть на что.",
            },
            {
                id: 1,
                speaker: Player.name,
                text: "[Марк не стал больше слушать каких бы то ни было объяснений и молча указал на дверь.]",
            },
        ]
    }
}

export default Ph2_2_2_1_1