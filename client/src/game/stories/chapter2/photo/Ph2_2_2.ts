import {backgroundsScene3} from "../../../interfaces/enums";
import {Mark, Player} from "../../../chars/chars";
import Ph2 from "./Ph2";
import Ph1_2 from "./Ph1_2.ts";
import Ph2_2_2_1 from "./Ph2_2_2_1";
import Ph2_2_2_2 from "./Ph2_2_2_2";
import Ph2_2_2_3 from "./Ph2_2_2_3";
import {choiceI, legend, storyI} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";

const Ph2_2_2 = toStory((): legend[] => {

    const backgrounds = backgroundsScene3

    const photoChoice: choiceI[] = [
        {
            text: "Из тебя слова клещами тянуть надо?",
            story: Ph2_2_2_1()
        },
        {
            text: "Иии…",
            story: Ph2_2_2_2()
        },
        {
            text: "Я понял. Тебе подсказать, как завоевать её сердце, или донести твои чувства?\n",
            story: Ph2_2_2_3()
        },
    ]

    return [
        {
            id: 1,
            speaker: Mark.name,
            text: "Есть одна девушка, которая мне нравится…",
        },
        {
            id: 1,
            speaker: Player.name,
            text: "Тяжёлый вздох. Продолжай.",
        },
        {
            id: 1,
            speaker: Mark.name,
            text: "Она мне нравится…",
            choice: photoChoice
        },
    ]
})

export default Ph2_2_2