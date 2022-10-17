import {Strangers} from "../../characters/characters";
import {legend} from "../../interfaces/interfaces";
import toStory from "../../functions/toStory";
import StoreChoices from "../../mobX/stores/StoreChoices";

const Scene7_strangers = toStory((): legend[] => {

    const nochoice = StoreChoices.withSimna ? "Scene7B1_2" : "Scene7B2_1"

    return [
        {
            speaker: Strangers.name,
            text: "Пора заканчивать. Мерещится уже всякое. Что у нас по плану на этот раз удалить надо?",
        },
        {
            text: "Информацию о некоторых научных достижениях. И ещё подкорректировать факты о строительстве Ваалонской башни.",
        },
        {
            text: "Написать, что это морской бог наказал глупых людей, решивших с ним спорить?",
        },
        {
            text: "Не, до этого ещё далеко. Думаю, не раньше следующего поколения внедрять будем.",
        },
        {
            text: "А у них к этому моменту останется ещё электричество, чтобы суметь прочесть эти записи?",
        },
        {
            text: "Это уже не наша головная боль. Наше с тобой дело маленькое: подменить информацию, какую просят и дело с концом.",
        },
        {
            text: "Тоже верно. Ещё долго?",
        },
        {
            text: "Почти закончил... Всё, выключаем и уходим.",
            nochoice
        },
    ]
})

export default Scene7_strangers