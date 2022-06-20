import {Mark} from "../../../chars/chars";
import StartStory2 from "../StartStory2";
import {backgroundsChapter1} from "../../../interfaces/enums";
import {initStoryI} from "../../../interfaces/interfaces";

const First = (): initStoryI => {

    const backgrounds = backgroundsChapter1

    return {
        backgrounds,
        history:  [
            {
                id: 1,
                speaker: Mark.name,
                text: "А, ну тогда понятно, почему ты такой… другой.",
                nochoice: StartStory2()
            }
        ]
    }
}

export default First