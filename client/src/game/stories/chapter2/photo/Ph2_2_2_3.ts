import {Mark, Player} from "../../../characters/chars";
import {legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";

const Ph2_2_2_3 = toStory((): legend[] => {

    return [
        {
            id: 1,
            speaker: Mark.name,
            text: "Я бы хотел, чтобы ты донёс до неё мои чувства. Но если ещё и подскажешь что, я тоже не против!",
        },
        {
            id: 1,
            speaker: Player.name,
            text: "Замётано, дружище!  [Ещё некоторое время мы с Марком побеседовали и договорились, что я встречусь с Симной (та самая?) завтра.]",
        }
    ]
})

export default Ph2_2_2_3