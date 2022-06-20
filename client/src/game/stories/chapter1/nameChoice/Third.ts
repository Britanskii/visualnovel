import {Mark} from "../../../chars/chars";
import StartStory2 from "../StartStory2";
import {backgroundsChapter1} from "../../../interfaces/enums";
import {storyI} from "../../../interfaces/interfaces";

const Third = (): storyI[] => {

    const backgrounds = backgroundsChapter1

    return [
        {
            id: 1,
            speaker: Mark.name,
            text: "Хахаха! Вот это ты даёшь!",
            nochoice: StartStory2()
        }
    ]
}

export default Third