import {Mark, Player} from "../../../characters/chars";
import Ph2_1 from "./Ph2_1";
import Ph2_2_2 from "./Ph2_2_2";
import {choiceI, legend, storyI} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";

const Ph2_2 = toStory((): legend[] => {

    const photoChoice: choiceI[] = [
        {
            text: "Хм. Ну что ж. Раз надо, то надо.",
            story: "Ph2_1"
        },
        {
            text: "Что за услуга?",
            story: "Ph2_2_2"
        }
    ]

    return [
        {
            id: 1,
            speaker: Mark.name,
            text: " Хм… Если совсем денег нет… то ничем помочь не смогу. Гнущийся пластик (или кожа какого-то морского зверя?) у нас на вес ирдания. Максимум, если только за материал заплатишь, а за работу… Можешь оплатить услугой.",
            choice: photoChoice
        }
    ]
})

export default Ph2_2