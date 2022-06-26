import {Player} from "../../characters/characters";
import {legend} from "../../interfaces/interfaces";
import toStory from "../../functions/toStory";
import {backgroundsScene7} from "../../../data/backgrounds";
import archive_outside_night_close from "../../../res/backgrounds/scene7/archive_outside_night_close.jpg";
import archive_night from "../../../res/backgrounds/scene7/archive_night.jpg";

const Scene7B2 = toStory((): legend[] => {

    const backgrounds = backgroundsScene7

    return [
        {
            choice: [],
            speaker: Player.name,
            text: "Так, ключи у меня есть, спасибо Симне, инструкции я получил, охрана отсутствует (так главный архивариус пожелал. Денег ему видите ли лишних жалко), можно и делом заняться.",
            background: backgrounds.archive_outside_night_close
        },
        {
            speaker: Player.name,
            text: "Хм… А замок-то открыт оказался. Кто-то у нас халатно относится к своей работе.",
        },
        {
            text: "",
            background: backgrounds.black
        },
        {
            text: "",
            background: backgrounds.archive_night
        },
        {
            text: "Фууух, всё внутри бурлит. Взломом и грабежами я ещё не занимался. Впрочем, грабежи сегодня не предвидятся.",
            background: backgrounds.archive_desk
        },
        {
            speaker: Player.name,
            text: "Да и взломом это не назовёшь. Ключ-то есть. Тааак, значит за столом прямо по коридору до хранилища…",
        },
        {
            text: "",
            background: backgrounds.black,
            nochoice: "Scene7_strangers"
        },
    ]
})

export default Scene7B2