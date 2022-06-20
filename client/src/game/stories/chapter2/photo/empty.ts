
import { backgroundsScene3} from "../../../interfaces/enums";
import {Mark, Player} from "../../../chars/chars";
import Ph1 from "./Ph1";
import Ph1_2 from "./Ph1_2.ts";
import {initStoryI} from "../../../interfaces/interfaces";

const empty = (): initStoryI => {

    const backgrounds = backgroundsScene3

    return {
        backgrounds,
        history:  [
            {
                id: 1,
                characters: [Mark.main],
                text: `Не так быстро, ${Player.name}! Документы не выносятся за пределы архива. Если тебе нужны копии, то это будет стоить валюты. Оплати и приходи завтра. Я успею закончить их перерисовывать.`,
                // choice: photoChoice
            }
        ]
    }
}

export default empty