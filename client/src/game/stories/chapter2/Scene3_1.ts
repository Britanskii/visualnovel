import {Mark} from "../../characters/characters";
import Ph1 from "./photo/Ph1";
import Ph2 from "./photo/Ph2";
import {choiceI, legend} from "../../interfaces/interfaces";
import toStory from "../../functions/toStory";

const Scene3_1 = toStory((): legend[] => {

    const photoChoice: choiceI[] = [
        {
            text: "Аа… цифровых версий нету?",
            story: "Ph1"
        },
        {
            text: "Спасибо, я их постараюсь вернуть в течении недели.",
            story: "Ph2"
        }
    ]

    return [
        {
            id: 1,
            speaker: "Окружение",
            characters: [Mark.main],
            text: "Возвращается Марк и кладёт перед ГГ несколько свитков со старыми планами эвакуации секторов (палуб) Ковчегов",
            choice: photoChoice
        }
    ]
})

export default Scene3_1