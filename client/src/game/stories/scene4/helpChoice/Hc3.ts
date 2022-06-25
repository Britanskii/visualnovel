import {legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";
import {backgroundsScene4} from "../../../../data/backgrounds";
import {Player, Stick} from "../../../characters/characters";
import StoreChoices from "../../../mobX/stores/StoreChoices";

const Hc3 = toStory((): legend[] => {

    const nochoice = StoreChoices.helpSimna ? "Scene5A" : "Scene5"

    return [
        {
            speaker: Stick.name,
            text: "Бееее! (показывает язык и убегает)"
        },
        {
            speaker: Player.name,
            characters: [],
            text: "Пфф. Мелкий избалованный засранец.",
            nochoice
        }
    ]
})

export default Hc3