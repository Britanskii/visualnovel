import Scene7B1_8 from "../Scene7B1_8";
import {legend} from "../../../interfaces/interfaces";
import {Simna} from "../../../characters/characters";
import toStory from "../../../functions/toStory";

const Dc7B1_2 = toStory((): legend[] => {

    //const backgrounds =

    return [
        {
            speaker: Simna.name,
            text: "Это верно, мой глупый спаситель. Иди уже сюда. Думаю, мы давно друг друга поняли.",
            nochoice: "Scene7B1_8"
        },
    ]
})

export default Dc7B1_2