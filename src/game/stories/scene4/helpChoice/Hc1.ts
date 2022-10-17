import {choiceI, legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";
import {backgroundsScene4} from "../../../../data/backgrounds";
import {Stick} from "../../../characters/characters";

const Hc1 = toStory((): legend[] => {

const backgrounds = backgroundsScene4

    const whenChoice: choiceI[] = [
        {
            text: "Конечно. Завтра пойдём навстречу приключениям вместе.",
            story: "Wc1"
        },
        {
            text: "Нуу, я знаю, где ты живёшь. Как только станет понятно, что делать дальше, я сразу тебе сообщу.",
            story: "Wc1"
        }
    ]

    return [
        {
            speaker: Stick.name,
            text: "Правда? Правда-правда?! Я так счастлив, спасибо, я тебя не подведу! Когда отправимся с тобой навстречу приключениям?",
            choice: whenChoice
        }
    ]
})

export default Hc1