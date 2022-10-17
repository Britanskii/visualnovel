import {choiceI, legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";
import {backgroundsScene4} from "../../../../data/backgrounds";

const Hc2 = toStory((): legend[] => {

const backgrounds = backgroundsScene4

    const familyChoice: choiceI[] = [
        {
            text: "Свали, мелочь. Ты меня раздражаешь",
            story: "Hc3"
        },
        {
            text: "И что, на твоих родителей такое поведение действует?",
            story: "Hc3"
        }
    ]

    return [
        {
            text: "Ну пожалуйста! Я точно тебе пригожусь! Возьми меня в помощники!",
            choice: familyChoice
        }
    ]
})

export default Hc2