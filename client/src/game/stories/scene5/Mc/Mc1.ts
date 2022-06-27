import {choiceI, legend} from "../../../interfaces/interfaces";
import toStory from  "../../../functions/toStory";
import {backgroundsScene5} from "../../../../data/backgrounds";

const Mc1 = toStory((): legend[] => {

    const backgrounds = backgroundsScene5

    const whyChoice5: choiceI[] = [
        {
            text: "Кхм… я всё-таки хотел бы получить то, зачем приходил в архив. Планы Сигм.",
            story: "Wc5_1"
        },
        {
            text: "Прости. Я не имел в виду, что было глупо тебя спасать. Я имел ввиду, что вся ситуация оказалась глупой.",
            story: "Wc5_2"
        }
    ]

    return [
        {
            id: 1,
            text: "Хм. Глупо значит. Так чем я могла бы тебе помочь за твою… глупость?",
            choice: [
                {
                    text: "Кхм… я всё-таки хотел бы получить то, зачем приходил в архив. Планы Сигм.",
                    story: "Wc5_1"
                },
                {
                    text: "Прости. Я не имел в виду, что было глупо тебя спасать. Я имел ввиду, что вся ситуация оказалась глупой.",
                    story: "Wc5_2"
                }
            ]
        }
    ]
})

export default Mc1