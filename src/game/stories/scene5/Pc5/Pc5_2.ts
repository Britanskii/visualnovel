import {legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";
import {backgroundsScene5} from "../../../../data/backgrounds";
import {Player, Simna} from "../../../characters/characters";

const Pc5_2 = toStory((): legend[] => {

const backgrounds = backgroundsScene5

    return [
        {
            speaker: Player.name,
            text: "Прости, я не хотел тебя ничем обидеть. Просто меня выбило из колеи то, что я так и не смог получить планов, а они мне жизненно необходимы."
        },
        {
            speaker: Simna.name,
            text: "Ох и то верно. Только я не знаю, чем смогу тебе помочь, как уже говорила ранее.",
            nochoice: "Scene5_1_1_2"
        }
    ]
})

export default Pc5_2