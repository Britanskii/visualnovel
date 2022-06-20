import {backgroundsScene3} from "../../../interfaces/enums";
import {Mark, Player} from "../../../chars/chars";
import Ph2 from "./Ph2";
import Ph1_2 from "./Ph1_2.ts";
import {storyI} from "../../../interfaces/interfaces";

const Ph1_2_1 = (): storyI[] => {

    const backgrounds = backgroundsScene3

    return [
        {
            id: 1,
            text: "Если тебе есть на что. Но это тоже стоит денег. Гораздо меньше, правда, но стоит.",
        },
        {
            id: 1,
            speaker: Player.name,
            text: "Пойдёт.",
        }
    ]
}

export default Ph1_2_1