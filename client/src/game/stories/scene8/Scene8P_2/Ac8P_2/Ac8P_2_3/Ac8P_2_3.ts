import {Mark, Player} from "../../../../../characters/characters";
import {backgroundsScene8} from "../../../../../../data/backgrounds";
import {legend} from "../../../../../interfaces/interfaces";
import toStory from "../../../../../functions/toStory";


const Ac8P_2_3_1 = toStory((): legend[] => {

    const backgrounds = backgroundsScene8

    return [
        {
            speaker: Mark.name,
            characters: [Mark.think],
            text: "Бывало несколько раз выбрасывали на моём веку. Краска с них смывается легко, а сломать такие карточки… не невозможно, но это специально стараться надо, как правило.",
            background: backgrounds.archive_close
        },

    ]
})

export default Ac8P_2_3_1