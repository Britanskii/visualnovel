import {Player, Simna} from "../../../characters/characters";
import {legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";

const Ic7B1_2 = toStory((): legend[] => {

    //const backgrounds =

    return [
        {
            speaker: Simna.name,
            text: "[приближение] Готова...",
        },
        {
            speaker: Simna.name,
            text: "[приближение] Послушать..."
        },
        {
            speaker: Player.name,
            text: "Ну, тут надо не только слушать, но и участвовать.",
        },
        {
            speaker: Simna.name,
            text: "Да? Заманчиво. И что же надо делать?",
        },
        {
            speaker: Player.name,
            text: "Сейчас покажу...",
            nochoice: "Scene7B1_8"
        },
    ]
})

export default Ic7B1_2