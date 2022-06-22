import {Mark} from "../../../chars/chars";
import StartStory2 from "../StartStory2";
import {legend, storyI} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";

const Nc1 = toStory((): legend[] => {

    return [
            {
                id: 1,
                speaker: Mark.name,
                text: "А, ну тогда понятно, почему ты такой… другой.",
                nochoice: StartStory2()
            }
        ]
})

export default Nc1