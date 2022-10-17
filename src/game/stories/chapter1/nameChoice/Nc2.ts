import {Mark} from "../../../characters/characters";
import StartStory2 from "../StartStory2";
import {legend, storyI} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";
import StoreChoices from "../../../mobX/stores/StoreChoices";
import {nameChoice} from "../../../interfaces/choices";

const Nc2 = toStory((): legend[] => {

    StoreChoices.nameChoice = nameChoice.HUNTER

    return [
        {
            id: 1,
            speaker: Mark.name,
            text: "Пфф, ну удачи в поисках твоих сокровищ. Повидал я таких. Не связывался бы ты с этим.",
            nochoice: "StartStory2"
        }
    ]
})


export default Nc2