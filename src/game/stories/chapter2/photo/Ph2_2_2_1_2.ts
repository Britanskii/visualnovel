import {Mark} from "../../../characters/characters";
import {legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";

const Ph2_2_2_1_2 = toStory((): legend[] => {

    return [
        {
            id: 1,
            speaker: Mark.name,
            text: "Завтра будет готово. ",
            nochoice: "Scene4"
        }
    ]
})

export default Ph2_2_2_1_2