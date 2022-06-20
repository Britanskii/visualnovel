import {storyI} from "../../interfaces/interfaces";
import {Mark, Player, Stick} from "../../chars/chars";
import {backgroundsScene4} from "../../interfaces/enums";


const Scene4 = (): storyI[] => {

    const backgrounds = backgroundsScene4

    return [
        {
            id: 1,
            speaker: Stick.name,
            characters: [Stick.main],
            background: backgrounds.tavern_empty,
            text: `Эгей! Привет, ${Player.name}`,
        }
    ]
}

export default Scene4