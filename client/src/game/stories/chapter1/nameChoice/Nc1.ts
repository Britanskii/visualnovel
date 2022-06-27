import {Mark} from "../../../characters/characters";
import StartStory2 from "../StartStory2";
import {legend, storyI} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";
import StoreChoices from "../../../mobX/stores/StoreChoices";
import {nameChoice} from "../../../interfaces/choices";

const Nc1 = toStory((): legend[] => {

    StoreChoices.nameChoice = nameChoice.JOURNALIST

    return [
            {
                id: 1,
                speaker: Mark.name,
                text: "А, ну тогда понятно, почему ты такой… другой.",
                nochoice: "StartStory2"
            }
        ]
})

export default Nc1