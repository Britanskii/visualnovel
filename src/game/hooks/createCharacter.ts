import data from "../../data/characters";
import {character} from "../interfaces/interfaces";
// import 'animate.css'

const createCharacter = (char: string): character => {

    const character = data[char]


    //Emotions

    const onChangeEmotion = (emo: string) => {
        switch (emo) {
            case 'MAIN':
                return character.images.main;
            case 'HAPPY':
                return  character.images.happy;
            case 'ANGRY':
                return character.images.angry;
            case 'HORNY':
                return character.images.horny;
            case 'SHY':
                return character.images.shy;
            case 'SURPRISED':
                return character.images.surprised;
            case 'THINK':
                return character.images.think;
            default:
                new Error('No emo selected');
                break;
        }
    }

    const main = onChangeEmotion('MAIN');
    const happy = onChangeEmotion('HAPPY');
    const angry = onChangeEmotion('ANGRY');
    const horny = onChangeEmotion('HORNY');
    const shy = onChangeEmotion('SHY');
    const surprised = onChangeEmotion('SURPRISED');
    const think = onChangeEmotion('THINK');

    const id = character.id


    return (
        {
            id,
            main, happy, angry, horny, shy, surprised, think,
            name: character.name,
            unknown: character.unknown
        }
    )
}

export default createCharacter