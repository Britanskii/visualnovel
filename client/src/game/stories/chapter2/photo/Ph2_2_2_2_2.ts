import {backgroundsScene3} from "../../../interfaces/enums";
import {Mark, Player} from "../../../chars/chars";
import Ph2 from "./Ph2";
import Ph1_2 from "./Ph1_2.ts";
import Ph2_1 from "./Ph2_1";
import Ph2_2_2_3 from "./Ph2_2_2_3";
import {storyI} from "../../../interfaces/interfaces";

const Ph2_2_2_2_2 = (): storyI[] => {

    const backgrounds = backgroundsScene3

    return [
        {
            id: 1,
            text: "Понятно. Ну тогда плати полную сумму и приходи завтра. Копии будут готовы.",
        }
    ]
}

export default Ph2_2_2_2_2