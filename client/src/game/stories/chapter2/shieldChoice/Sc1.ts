import {Mark} from "../../../characters/characters";
import Scene3_1 from "../Scene3_1";
import {legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";
import StoreChoices from "../../../mobX/stores/StoreChoices";

const Sc1 = toStory((): legend[] => {

    StoreChoices.helpSimna = false

    return [
        {
            id: 1,
            speaker: Mark.name,
            text: "Ничего не происходит, Симна и неприятный мужик заходят во внутренние помещения.",
            nochoice: "Scene3_1"
        }
    ]
})

export default Sc1