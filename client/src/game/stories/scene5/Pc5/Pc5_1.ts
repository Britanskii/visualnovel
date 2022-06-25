import {choiceI, legend} from "../../../interfaces/interfaces";
import toStory from  "../../../functions/toStory";
import {backgroundsScene5} from "../../../../data/backgrounds";
import {Hostess, Player, Simna} from "../../../characters/characters";

const Pc5_1 = toStory((): legend[] => {

    const backgrounds = backgroundsScene5

    return [
        {
            speaker: Simna.name,
            text: "Если ты решил предложить мне нечто в духе моего начальника, то спасибо, я сыта по горло!",
        },
        {
            speaker: Player.name,
            characters: [],
            text: "Постой, Симна! И почему с девушками всегда так сложно?",
        },
        {
            speaker: Hostess.name,
            text: "Ха-ха! Я бы рассказала, но лучше посмотрю, как ты барахтаешься.",
            characters: [Hostess.main]
        },
        {
            speaker: Player.name,
            text: "Спасибо за поддержку.",
        },
        {
            text: "\\И где этот Стик, когда он так нужен? С другой стороны, его, как ребёнка, в архив просто не пустят. Придётся лезть туда самому и без подсказок. Ладно. Главное, что для электронной охраны у них тут недостаточно мощностей.\\\n"
        }
    ]
})

export default Pc5_1