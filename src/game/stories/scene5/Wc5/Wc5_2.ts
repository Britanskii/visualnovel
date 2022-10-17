import {legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";
import {backgroundsScene5} from "../../../../data/backgrounds";

const Wc5_2 = toStory((): legend[] => {

const backgrounds = backgroundsScene5

    return [
        {
            text: "Ах, вот оно что. Ты прав, она и правда получилась глупой. Так чем я тебе могу помочь?",
            nochoice: "Scene5_1_1_2"
        }
    ]
})

export default Wc5_2