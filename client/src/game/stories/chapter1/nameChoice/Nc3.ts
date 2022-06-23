import {Mark} from "../../../chars/chars";
import StartStory2 from "../StartStory2";
import {legend, storyI} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";

const Nc3 = toStory((): legend[] => {

    return [
        {
            id: 1,
            speaker: Mark.name,
            text: "Хахаха! Вот это ты даёшь!",
            nochoice: StartStory2()
        }
    ]
})

export default Nc3