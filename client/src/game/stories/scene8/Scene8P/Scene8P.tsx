import {Hostess, Mark, Player, Strangers} from "../../../characters/characters";
import {legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";
import StoreChoices from "../../../mobX/stores/StoreChoices";
import {backgroundsScene7, backgroundsScene8} from "../../../../data/backgrounds";

const Scene8P = toStory((): legend[] => {

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
            text: "Привет, Марк! Я за планами.",
            background: backgrounds.archive_close_mark
        },
        {
            speaker: Mark.name,
            text: `Привет, ${Player.name}. Я как раз закончил их перерисовывать. Вот, держи.`,
            background: backgrounds.archive_close_mark_scrolls
        },
        {
            speaker: Player.name,
            characters: [Mark.happy],
            text: "Большое спасибо, ты лучший! Кстати, хотел спросить, а что это за карточки, на которых мы вчера писали данные планов? Понимаю, что бумага тут на вес ирдания, но эти карточки не выглядят, как нечто, что легко достать на Сигме.",
            background: backgrounds.archive_close
        },
        {
            speaker: Mark.name,
            characters: [Mark.main],
            text: "Эти-то? Это мусор из тоннелей. Искатели часто их приносили. Говорят, они там просто на полу валяются. Писать на них удобно, а потом стирать. Вот и приспособили к работе Архива.",
            //nochoice-development
        },

    ]
})

export default Scene8P