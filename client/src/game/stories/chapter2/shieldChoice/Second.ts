import {Mark} from "../../../chars/chars";
import { backgroundsScene3} from "../../../interfaces/enums";

const Second = (): initStoryI => {

    const backgrounds = backgroundsScene3

    return {
        backgrounds,
        history:  [
            {
                id: 1,
                speaker: Mark.name,
                text: "А, ну тогда понятно, почему ты такой… другой.",
            }
        ]
    }
}

export default Second