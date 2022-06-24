
import {Mark} from "../../../characters/chars";
import Ph2 from "./Ph2";
import Ph1_2_1 from "./Ph1_2_1";
import {choiceI, legend, storyI} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";

const Ph1_2 = toStory((): legend[] => {

    const photoChoice: choiceI[] = [
        {
            text: "Ладно-ладно, я уже понял, что я зажравшийся буржуй. А сфотографировать их можно?",
            story: "Ph1_2_1"
        },
        {
            text: "И то верно. Тогда возьму эти. Через сколько их вернуть?",
            story: "Ph2"
        }
    ]

    return [
            {
                id: 1,
                characters: [Mark.main],
                text: "Ну у зажиточных, которые в космос летают и на Корпорацию работают, может и есть, но остальным то это скорее ни к чему.",
            },
            {
                id: 1,
                text: "Удовольствие дорогое, ещё из строя выйдет из-за очередной бури, или и вовсе в воду упадёт. Да и связь только в районах, где Корпорация полезные ископаемые добывает, да в Зероне.",
                choice: photoChoice
            }
        ]
})

export default Ph1_2