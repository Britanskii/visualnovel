import {choiceI, legend} from "../../../interfaces/interfaces";
import toStory from  "../../../functions/toStory";
import {backgroundsScene5} from "../../../../data/backgrounds";

const Hc5_1 = toStory((): legend[] => {

    const backgrounds = backgroundsScene5

    return [
        {
            id: 1,
            text: "С превеликим удовольствием. Ведь именно за этим я сюда и пришла! Чем же я могу помочь смелому сэру?",
            nochoice: "Scene5_1_1_2"
        }
    ]
})

export default Hc5_1