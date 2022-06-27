import {choiceI, legend} from "../../../interfaces/interfaces";
import toStory from  "../../../functions/toStory";
import {backgroundsScene5} from "../../../../data/backgrounds";

const Wc5_1 = toStory((): legend[] => {

    const backgrounds = backgroundsScene5

    const proposalChoice5: choiceI[] = [
        {
            text: "Я хотел тебе кое-что предложить. Нечто… авантюрное. Марку я бы подобное предложить не смог.",
            story: "Pc5_1"
        },
        {
            text: "\\Ещё минуту назад она казалась чуть более сговорчивой. С этими  девушками так сложно! Но есть универсальное средство.\\",
            story: "Pc5_2"
        }
    ]

    return [
        {
            id: 1,
            text: "Это всё, что ты хотел? Тогда я ничем не могу тебе помочь. Как я уже говорила раньше, этим занимается Марк. Ты вроде с ним знаком. Вот и обратился бы снова напрямую.",
            choice: proposalChoice5
        }
    ]
})

export default Wc5_1