
import { backgroundsScene3} from "../../../interfaces/enums";
import {Mark, Player} from "../../../chars/chars";
import Ph2 from "./Ph2";
import Ph1_2 from "./Ph1_2.ts";
import Ph2_1 from "./Ph2_1";
import Ph2_2_2 from "./Ph2_2_2";

const Ph2_2 = (): initStoryI => {

    const backgrounds = backgroundsScene3

    const photoChoice: choiceI[] = [
        {
            text: "Хм. Ну что ж. Раз надо, то надо.",
            story: Ph2_1()
        },
        {
            text: "Что за услуга?",
            story: Ph2_2_2()
        }
    ]

    return {
        backgrounds,
        history:  [
            {
                id: 1,
                text: " Хм… Если совсем денег нет… то ничем помочь не смогу. Гнущийся пластик (или кожа какого-то морского зверя?) у нас на вес ирдания. Максимум, если только за материал заплатишь, а за работу… Можешь оплатить услугой.",
                choice: photoChoice
            }
        ]
    }
}

export default Ph2_2