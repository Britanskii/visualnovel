import {Archivist, Mark, Simna} from "../chars/chars";


const getCharacterNameByImg = (image: string): string => {
    switch (image) {
        case Simna.main:
            return Simna.id
        case Archivist.main:
            return Archivist.id
        case Mark.main:
        case Mark.angry:
        case Mark.happy:
        case Mark.shy:
        case Mark.surprised:
        case Mark.think:
            return Mark.id
        default:
            return "character"
    }

}

export default getCharacterNameByImg