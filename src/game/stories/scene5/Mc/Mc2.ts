import {choiceI, legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";
import {backgroundsScene5} from "../../../../data/backgrounds";

const Mc2 = toStory((): legend[] => {

const backgrounds = backgroundsScene5

    const Hc5: choiceI[] = [
        {
            text: "О, леди… ээмм… Симна? Рад вам услужить. Быть может и вы окажете мне ответную услугу?",
            story: "Hc5_1"
        },
        {
            text: "Кхм, извини, что сразу к делу, но я всё-таки хотел бы получить то, зачем приходил в архив. Планы Сигм.",
            story: "Hc5_2"
        }
    ]

    return [
        {
            text: "О, так ты рыцарь? Что ж, я благодарна вам безмерно, сэр рыцарь, за вашу доблесть!",
            choice: Hc5
        }
    ]
})

export default Mc2