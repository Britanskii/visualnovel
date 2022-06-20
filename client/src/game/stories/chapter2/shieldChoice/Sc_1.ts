import {Mark} from "../../../chars/chars";
import {backgroundsScene3} from "../../../interfaces/enums";
import Scene3_1 from "../Scene3_1";
import {storyI} from "../../../interfaces/interfaces";

const Sc_1 = (): storyI[] => {

    const backgrounds = backgroundsScene3

    return [
        {
            id: 1,
            speaker: Mark.name,
            text: "Ничего не происходит, Симна и неприятный мужик заходят во внутренние помещения.",
            nochoice: Scene3_1()
        }
    ]
}

export default Sc_1