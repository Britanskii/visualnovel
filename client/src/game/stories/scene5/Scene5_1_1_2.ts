import {choiceI, legend} from "../../interfaces/interfaces";
import toStory from "../../functions/toStory";
import {backgroundsScene5} from "../../../data/backgrounds";
import {Player, Simna} from "../../characters/characters";

const Scene5_1_1_2 = toStory((): legend[] => {

    const backgrounds = backgroundsScene5

    const goChoice: choiceI[] = [
        {
            text: " Думаю, твоя помощь будет совсем не лишней. И если ты согласна, я бы хотел, чтобы ты отправилась со мной.",
            story: "Gc5_1"
        },
        {
            text: "Если ты готова мне довериться, дать все ключи, пароли и явки, то я бы выбрал тот вариант, при котором ты не подвергалась бы лишней опасности.",
            story: "Gc5_2"
        }
    ]

    return [
        {
            speaker: Player.name,
            text: "У меня есть одна мысль. Только она не совсем ммм… безопасна. Сопровождена некоторым риском. Зато это в каком-то роде небольшое приключение."
        },
        {
            speaker: Simna.name,
            text: "А ты умеешь заинтересовать. И что это за мысль?"
        },
        {
            speaker: Player.name,
            text: "Ты только не пугайся, ладно? Придётся проникнуть в архив ночью."
        },
        {
            speaker: Simna.name,
            text: "Эт-т-то…"
        },
        {
            speaker: Player.name,
            text: "Ты не отказывайся сразу. Впрочем я не тяну тебя за собой и твоих подсказок и молчания будет достаточно."
        },
        {
            text: "Обещаю, что ничего, кроме копий планов не возьму и никакой порчей не займусь. Хотя, ты, опять же, можешь пойти со мной и проследить, чтобы я ничего такого не сделал."
        },
        {
            speaker: Simna.name,
            text: "Ты прав, это опасно."
        },
        {
            speaker: Player.name,
            text: "Я не вру в таких вещах."
        },
        {
            speaker: Simna.name,
            text: "А в каких врёшь?"
        },
        {
            speaker: Player.name,
            text: "Эээ… это просто оговорка была."
        },
        {
            speaker: Simna.name,
            text: "Ладно, не буду тебя мучить. Сам ты что думаешь: мне  пойти с тобой и проследить лично за тем, чтобы ты ничего не напортачил, или довериться и проинструктировать?",
            choice: goChoice
        }
    ]
})

export default Scene5_1_1_2