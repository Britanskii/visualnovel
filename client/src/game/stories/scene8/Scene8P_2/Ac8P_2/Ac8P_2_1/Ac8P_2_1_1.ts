import {Mark, Player} from "../../../../../characters/characters";
import {backgroundsScene8} from "../../../../../../data/backgrounds";
import {legend} from "../../../../../interfaces/interfaces";
import toStory from "../../../../../functions/toStory";

const Ac8P_2_1_1 = toStory((): legend[] => {

    const backgrounds = backgroundsScene8

    return [
        {
            speaker: Mark.name,
            characters: [Mark.main],
            text: "Я не пойму, ты нас за кого принимаешь вообще? За аборигенов, которые умеют только говном и палками пользоваться?",
            background: backgrounds.archive_close
        },
        {
            speaker: Player.name,
            text: "У вас есть мэрия?!",
            background: backgrounds.archive_close
        }
    ]
})

export default Ac8P_2_1_1