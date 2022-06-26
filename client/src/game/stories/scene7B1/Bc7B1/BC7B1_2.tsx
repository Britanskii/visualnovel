import {legend} from "../../../interfaces/interfaces";
import {Simna} from "../../../characters/characters";
import toStory from "../../../functions/toStory";

const Bc7B1_2 = toStory((): legend[] => {

    //const backgrounds =

    return [
        {
            speaker: Simna.name,
            text: "“Не слишком”? После всего, что мы натворили? Да уж, такого не ожидала.",
            choice: [
                {
                    text: "В лучшем смысле этого слова.",
                    story: "Dc7B1_1"
                },
                {
                    text: "Не слушай меня. Я говорю глупости. Что бы ты ни предложила, мне это уже нравится.",
                    story: "Dc7B1_2"
                },
            ],
        },
    ]
})

export default Bc7B1_2