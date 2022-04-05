import data from "../../data/characters";
// import 'animate.css'

const createChar = (char: string): character => {

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
            default:
                new Error('No emo selected');
                break;
        }
    }

    const main = onChangeEmotion('MAIN');
    const happy = onChangeEmotion('HAPPY');
    const angry = onChangeEmotion('ANGRY');
    const horny = onChangeEmotion('HORNY');

    const actions = {
        'move': {
            'leftIn': 'animate__animated animate__bounceInLeft',
            'rightIn': 'animate__animated animate__bounceInRight',
            'leftOut': 'animate__animated animate__bounceOutLeft',
            'rightOut': 'animate__animated animate__bounceOutRight',
        },
        'emo': {
            'flirt': 'animate__animated animate__heartBeat',
            'jump': 'animate__animated animate__bounce',
        }
    }


    return (
        {
            main, happy, angry, horny,
            name: character.name,
            fullname: character.fullname,
            actions
        }
    )
}

export default createChar