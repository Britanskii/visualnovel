import {Mark} from "../../../characters/chars";
import StartStory2 from "../StartStory2";
import {legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";
import StoreChoices from "../../../mobX/stores/StoreChoices";
import {nameChoice} from "../../../interfaces/choices";

const Nc3 = toStory((): legend[] => {

    StoreChoices.nameChoice = nameChoice.ROBOT

    return [
        {
            id: 1,
            speaker: Mark.name,
            text: "Хахаха! Вот это ты даёшь!",
            nochoice: "StartStory2"
        }
    ]
})

export default Nc3