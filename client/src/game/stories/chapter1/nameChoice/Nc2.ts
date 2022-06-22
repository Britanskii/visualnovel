import {Mark} from "../../../chars/chars";
import StartStory2 from "../StartStory2";
import {backgroundsChapter1} from "../../../interfaces/enums";
import {legend, storyI} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";

const Nc2 = toStory((): legend[] => {

    return [
        {
            id: 1,
            speaker: Mark.name,
            text: "Пфф, ну удачи в поисках твоих сокровищ. Повидал я таких. Не связывался бы ты с этим.",
            nochoice: StartStory2()
        }
    ]
})


export default Nc2