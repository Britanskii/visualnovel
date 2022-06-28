import {Mark, Player} from "../../../../characters/characters";
import {backgroundsScene8} from "../../../../../data/backgrounds";
import {legend} from "../../../../interfaces/interfaces";
import toStory from "../../../../functions/toStory";


const Ac8P_2_1 = toStory((): legend[] => {

    const backgrounds = backgroundsScene8

    return [
        {
            speaker: Mark.name,
            characters: [Mark.main],
            text: "Кажется больше нигде их и не используют. По крайней мере я не сталкивался. Быть может на других Сигмах, в том же департаменте стражи, или… не знаю, в мэрии?",
            background: backgrounds.archive_close
        },
        {
            speaker: Player.name,
            text: "У вас есть мэрия?!",
            background: backgrounds.archive_close,
            choice: [
                {
                    text: "У вас есть мэрия?!",
                    story: "Ac8P_2_1_1"
                },

                {
                    text: "Я возьму посмотреть?",
                    story: "Ac8P_2_2"
                },
                {
                    text: "Ну тогда детишкам может? Порисовать. Хотя… маловаты.",
                    story: "Ac8P_2_1_2"
                }
            ]
        }
    ]
})

export default Ac8P_2_1