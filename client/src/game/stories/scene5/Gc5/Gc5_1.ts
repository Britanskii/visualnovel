import {choiceI, legend} from "../../../interfaces/interfaces";
import toStory from  "../../../functions/toStory";
import {backgroundsScene5} from "../../../../data/backgrounds";
import {Player, Simna} from "../../../characters/characters";

const Gc5_1 = toStory((): legend[] => {

    const backgrounds = backgroundsScene5

    return [
        {
            speaker: Player.name,
            text: "\\Так у тебя точно не возникнет желания настучать на меня.\\",
        },
        {
            speaker: Simna.name,
            text: "Ну раз так, то я согласна! И прослежу, и направлю!",
        },
        {
            speaker: Player.name,
            text: "Отлично! В таком случае выпьем эм… соку за успешное окончание мероприятия.",
        },
        {
            speaker: Simna.name,
            text: "За успешное окончание приключения!",
        }
    ]
})

export default Gc5_1