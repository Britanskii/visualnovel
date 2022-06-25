import {legend} from "../../../interfaces/interfaces";
import toStory from  "../../../functions/toStory";
import {backgroundsScene4} from "../../../../data/backgrounds";
import {Stick} from "../../../characters/characters";
import StoreChoices from "../../../mobX/stores/StoreChoices";

const Wc1 = toStory((): legend[] => {

    const nochoice = StoreChoices.helpSimna ? "Scene5A" : "Scene5"

    return [
        {
            speaker: Stick.name,
            text: "Отлично! С нетерпением буду ждать!",
            nochoice
        }
    ]
})

export default Wc1