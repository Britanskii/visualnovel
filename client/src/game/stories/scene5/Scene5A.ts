import {choiceI, legend} from "../../interfaces/interfaces";
import toStory from "../../functions/toStory";
import {backgroundsScene5} from "../../../data/backgrounds";
import {Hostess, Player, Simna} from "../../characters/characters";

const Scene5 = toStory((): legend[] => {

const backgrounds = backgroundsScene5

    const masculinityChoice: choiceI[] = [
        {
            text: "Глупо скорее, чем мужественно.",
            story: "Mc1"
        },
        {
            text: "Не за что. В конце концов, как бы избито и патетично это ни звучало, на то и нужны рыцари.",
            story: "Mc2"
        }
    ]

    return [
        {
            choice: [],
            speaker: Simna.name,
            characters: [Simna.main, Hostess.main],
            text: "А я верю, что они существуют. Ведь слухи не возникают на ровном месте.",
            background: backgrounds.tavern
        },
        {
            speaker: Hostess.unknown,
            text: "Да, да. Продолжай верить во всякую чепуху, болтливая девчонка. (уходит)"
        },
        {
            speaker: Simna.name,
            characters: [Simna.main],
            text: `Привет ${Player.name}! Ещё раз спасибо за то, что заступился за меня! Это было так… мужественно с твоей стороны!`,
            background: [backgrounds.tavern,backgrounds.tavern_aska],
            choice: masculinityChoice
        }
    ]
})

export default Scene5