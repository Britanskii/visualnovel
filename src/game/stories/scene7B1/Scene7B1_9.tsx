import {legend} from "../../interfaces/interfaces";
import {Player, Simna} from "../../characters/characters";
import toStory from "../../functions/toStory";
import {backgroundsScene7} from "../../../data/backgrounds";
import archive_desk from "../../../res/backgrounds/scene7/archive_desk.jpg";
import archive_outside_night_open from "../../../res/backgrounds/scene7/archive_outside_night_open.jpg";

const Scene7B1_9 = toStory((): legend[] => {

    const backgrounds = backgroundsScene7

    return [
        {
            speaker: Simna.name,
            text: "Оххо. Кажется, мы немного заигрались в расхитителей катакомб. Те странные люди заперли нас снаружи! Что делать?",
            background: backgrounds.archive_desk
        },
        {
            speaker: Player.name,
            text: "Видимо, придётся ломать дверь.",
        },
        {
            speaker: Simna.name,
            text: "Но там же замок!",
        },
        {
            speaker: Player.name,
            text: "Видел я ваш замок. На соплях держится и добром слове.",
        },
        {
            text: "",
            background: backgrounds.black
        },
        {
            speaker: Player.name,
            text: "Всё, готово. Мы свободны!",
            background: backgrounds.archive_outside_night_open
        },
        {
            text: "Теперь отсыпаемся и навстречу новым подвигам.",
        },
    ]
})

export default Scene7B1_9