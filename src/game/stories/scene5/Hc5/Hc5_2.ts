import {choiceI, legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";
import {backgroundsScene5} from "../../../../data/backgrounds";

const Hc5_2 = toStory((): legend[] => {

const backgrounds = backgroundsScene5

    return [
        {
            text: " Боюсь, я тебе мало чем могу помочь, как говорила уже раньше. Может стоит напрямую спросить у Марка? Вы же вроде с ним знакомы.",
            nochoice: "Scene5_1_1_2"
        }
    ]
})

export default Hc5_2