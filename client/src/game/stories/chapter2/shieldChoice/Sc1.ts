import {Mark} from "../../../characters/chars";
import Scene3_1 from "../Scene3_1";
import {legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";

const Sc1 = toStory((): legend[] => {

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