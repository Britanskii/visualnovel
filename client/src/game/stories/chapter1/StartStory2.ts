import {Mark, Player} from "../../characters/characters";
import Scene3 from "../chapter2/Scene3";
import {legend, storyI} from "../../interfaces/interfaces";
import toStory from "../../functions/toStory";

const StartStory2 = toStory((): legend[] => {

    return [
        {
            id: 1,
            speaker: Mark.name,
            characters: [Mark.main],
            text: "Ладно, мне пора, вставать ни свет ни заря. До завтра тогда эээ… А зовут-то тебя как?",
        },
        {
            id: 2,
            speaker: Player.name,
            text: "Зови пока Исследователь",
        },
        {
            id: 1,
            speaker: Mark.name,
            text: `Ну, до завтра ${Player.name}. Я Марк, кстати`,
        },
        {
            id: 2,
            speaker: Player.name,
            text: "До завтра, Марк.",
        },
        {
            id: 2,
            text: "",
            characters: []
        },
        {
            id: 2,
            text: "Это оказалось проще, чем подумалось в начале. Может не так уж и сложно будет найти профессора.",
            nochoice: "Scene3"
        },
    ]
})

export default StartStory2