import {Hostess, Mark, Player, Strangers} from "../../../characters/characters";
import {legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";
import StoreChoices from "../../../mobX/stores/StoreChoices";
import {backgroundsScene7, backgroundsScene8} from "../../../../data/backgrounds";

const Scene8P_2 = toStory((): legend[] => {

    const backgrounds = backgroundsScene8

    return [
        {
            choice: [],
            speaker: Player.name,
            text: "\\Сегодня, как и вчера, в архиве никого из посетителей.\\",
            background: [backgrounds.archive, backgrounds.archive_mark],
        },
        {
            speaker: Player.name,
            text: "Привет, Марк!",
            background: backgrounds.archive_close_mark
        },
        {
            speaker: Mark.name,
            characters: [Mark.think],
            text: `Привет, ${Player.name}. Чего сегодня пришёл?`,
            background: backgrounds.archive_close
        },
        {
            speaker: Player.name,
            characters: [Mark.main],
            text: "Да хотел спросить, а что это за карточки, на которых мы вчера писали данные планов? Понимаю, что бумага тут на вес ирдания, но эти карточки не выглядят, как нечто, что легко достать на Сигме.",
        },
        {
            speaker: Mark.name,
            text: "Эти-то? Это мусор из тоннелей. Искатели часто их приносили. Говорят, они там просто на полу валяются. Писать на них удобно, а потом стирать. Вот и приспособили к работе Архива.",
            choice:  [
                {
                    text: "И что, совсем больше нигде не приспособили?",
                    story: "Ac8P_2_1"
                },
                {
                    text: "Я возьму посмотреть?",
                    story: "Ac8P_2_2"
                },
                {
                    text: "И частенько выбрасываете их?",
                    story: "Ac8P_2_3"
                }
            ]
        },

    ]
})

export default Scene8P_2