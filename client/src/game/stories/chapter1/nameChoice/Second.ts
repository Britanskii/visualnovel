import {Mark} from "../../../chars/chars";
import StartStory2 from "../StartStory2";
import {backgroundsChapter1} from "../../../interfaces/enums";
import {storyI} from "../../../interfaces/interfaces";

const Second = (): storyI[] => {

    const backgrounds = backgroundsChapter1

    return [
        {
            id: 1,
            speaker: Mark.name,
            text: "Пфф, ну удачи в поисках твоих сокровищ. Повидал я таких. Не связывался бы ты с этим.",
            nochoice: StartStory2()
        }
    ]
}


export default Second