import {backgroundsScene3} from "../../../interfaces/enums";
import {Mark, Player} from "../../../chars/chars";
import Ph2_1 from "./Ph2_1";
import Ph2_2 from "./Ph2_2";
import {choiceI, storyI} from "../../../interfaces/interfaces";

const Ph2 = (): storyI[] => {

    const backgrounds = backgroundsScene3

    const photoChoice: choiceI[] = [
        {
            text: "Эм… Ладно.",
            story: Ph2_1()
        },
        {
            text: "А если нет денег?",
            story: Ph2_2()
        }
    ]

    return [
        {
            id: 1,
            speaker: Mark.name,
            characters: [Mark.main],
            text: `Не так быстро, ${Player.name}! Документы не выносятся за пределы архива. Если тебе нужны копии, то это будет стоить валюты. Оплати и приходи завтра. Я успею закончить их перерисовывать.`,
            choice: photoChoice
        }
    ]
}

export default Ph2