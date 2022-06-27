import {choiceI, legend} from "../../../interfaces/interfaces";
import toStory from  "../../../functions/toStory";
import {backgroundsScene5} from "../../../../data/backgrounds";
import {Player, Simna} from "../../../characters/characters";
import StoreChoices from "../../../mobX/stores/StoreChoices";
import Scene7B2 from "../../scene7B2/Scene7B2";

const Gc5_1 = toStory((): legend[] => {

    const backgrounds = backgroundsScene5

    StoreChoices.withSimna = true

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
            nochoice: "Scene7B1"
        }
    ]
})

export default Gc5_1