import {Mark, Player} from "../../../characters/chars";
import {legend, storyI} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";

const Ph2_2_2_1_1 = toStory((): legend[] => {

    return [
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
})

export default Ph2_2_2_1_1