import Ph2_2_2_1_1 from "./Ph2_2_2_1_1";
import Ph2_2_2_1_2 from "./Ph2_2_2_1_2";
import {choiceI, legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";

const Ph2_2_2_1 = toStory((): legend[] => {

    const photoChoice: choiceI[] = [
        {
            text: "Эээ… да ладно, ты чего разозлился-то? Я просто пытался тебя подтолкнуть к ответу! Конечно я помогу, не вопрос!",
            story: Ph2_2_2_1_1()
        },
        {
            text: "Ну и морской бес с тобой!",
            story: Ph2_2_2_1_2()
        }
    ]

    return [
        {
            id: 1,
            text: "Не надо ничего тянуть! Моё предложение отменяется. Если хочешь получить копии планов, заплати полную сумму и приходи завтра!",
            choice: photoChoice
        }
    ]
})

export default Ph2_2_2_1