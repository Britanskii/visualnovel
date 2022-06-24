import {legend} from "../../../interfaces/interfaces";
import toStory from  "../../../functions/toStory";
import {backgroundsScene4} from "../../../../data/backgrounds";
import {Stick} from "../../../characters/characters";

const Wc1 = toStory((): legend[] => {

    return [
        {
            speaker: Stick.name,
            text: "Отлично! С нетерпением буду ждать!"
        }
    ]
})

export default Wc1