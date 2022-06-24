import {legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";
import {backgroundsScene4} from "../../../../data/backgrounds";
import {Player, Stick} from "../../../characters/characters";

const Hc3 = toStory((): legend[] => {

    return [
        {
            speaker: Stick.name,
            text: "Бееее! (показывает язык и убегает)"
        },
        {
            speaker: Player.name,
            text: "Пфф. Мелкий избалованный засранец."
        }
    ]
})

export default Hc3