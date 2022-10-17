import {choiceI, legend} from "../../interfaces/interfaces";
import toStory from "../../functions/toStory";
import {backgroundsScene4} from "../../../data/backgrounds";

const Scene4_1 = toStory((): legend[] => {

const backgrounds = backgroundsScene4

    const helpChoice: choiceI[] = [
        {
            text: `Хм. Пожалуй, что мне и правда может пригодиться твоя помощь в моей миссии… приключении… деле. В моём деле.`,
            story: "Hc1"
        },
        {
            text: 'Как-нибудь в другой раз.',
            story: "Hc2"
        },
        {
            text: 'Свали, мелочь. Ты меня раздражаешь.',
            story: "Hc3"
        }
    ]

    return [
        {
            choice: helpChoice
        }
    ]
})

export default Scene4_1
