import {legend} from "../../../interfaces/interfaces";
import toStory from "../../../functions/toStory";
import {backgroundsScene5} from "../../../../data/backgrounds";
import {Player, Simna} from "../../../characters/characters";
import StoreChoices from "../../../mobX/stores/StoreChoices";

const Gc5_2 = toStory((): legend[] => {

    const backgrounds = backgroundsScene5

    StoreChoices.withSimna = false

    return [
        {
            speaker: Simna.name,
            text: "Какая удивительная забота. Я согласна. Расскажу тебе, что нужно делать. Но только если ты действительно ничего лишнего не сделаешь… кроме одного.",
        },
        {
            speaker: Player.name,
            text: "Чего же?",
        },
        {
            speaker: Simna.name,
            text: "Я бы хотела, чтобы ты навёл шороху в кабинете главного архивариуса.",
        },
        {
            speaker: Player.name,
            text: "Ух ты! А ты, мстительная оказывается. Я в восхищении! Согласен.",
        },
        {
            speaker: Simna.name,
            text: "Тогда по рукам!",
            nochoice: "Scene7B2"
        }
    ]
})

export default Gc5_2