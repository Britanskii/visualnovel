import {Mark, Player} from "../../../../characters/characters";
import {backgroundsScene8} from "../../../../../data/backgrounds";
import {legend} from "../../../../interfaces/interfaces";
import toStory from "../../../../functions/toStory";

const Ac8P_2_2 = toStory((): legend[] => {

    const backgrounds = backgroundsScene8

    return [
        {
            speaker: Mark.name,
            characters: [Mark.think],
            text: "Ты же уже видел. Ну ладно. Посмотри, чего уж.",
            background: backgrounds.archive_close
        },

    ]
})

export default Ac8P_2_2