import {Mark} from "../../../chars/chars";
import StartStory2 from "../StartStory2";
import {backgroundsChapter1} from "../../../interfaces/enums";

const Second = (): initStoryI => {

    const backgrounds = backgroundsChapter1

    return {
        backgrounds,
        history: [
            {
                id: 1,
                speaker: Mark.name,
                text: "Пфф, ну удачи в поисках твоих сокровищ. Повидал я таких. Не связывался бы ты с этим.",
                nochoice: StartStory2()
            }
        ]
    }
}


export default Second