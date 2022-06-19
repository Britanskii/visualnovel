import {backgroundsScene3, typeDialogbox} from "../../interfaces/enums";
import {Archivist, Mark, Player, Simna} from "../../chars/chars";
import First from "./shieldChoice/First";
import Second from "./shieldChoice/Second";

const Scene3 = (): initStoryI => {

    const backgrounds = backgroundsScene3

    const shieldChoice: choiceI[] = [
        {
            text: 'Игнорировать',
            story: First()
        },
        {
            text: 'Вступиться за Симну',
            story: Second()
        }
    ]

    // const shieldChoice: choiceI[] = [
    //     {
    //         text: 'Игнорировать',
    //         story: Ph1()
    //     },
    //     {
    //         text: 'Вступиться за Симну',
    //         story: Ph2()
    //     }
    // ]

    return {
        backgrounds,
        history: [
            {
                id: 1,
                background: backgrounds.black,
                speaker: Player.name,
                text: "Кажется это здесь.",
            },
            {
                id: 2,
                background: backgrounds.archive_mark,
                text: "А в архиве… не людно. Марк нашёлся очень быстро - сидел прямо напротив входа.",
            },
            {
                id: 2,
                background: backgrounds.archive,
                characters: [Mark.main],
                text: "Привет, Марк, я за планами, как и обещал.",
            },
            {
                id: 2,
                speaker: Mark.name,
                text: "А я уже заждался!...",
            },
            {
                id: 2,
                speaker: Player.name,
                text: "Довольно быстро объяснив несложную местную систему заказа, Марк отправился в хранилище документов",
                characters: []
            },
            {
                id: 2,
                speaker: "Окружение",
                text: "Послышалось ото входа.",
            },
            {
                id: 2,
                speaker: Simna.name,
                characters: [Archivist.main, Simna.main],
                text: "Домогательства остаются домогательствами, как бы вы их не называли. Так что оставьте свою “милость” себе.\n",
            },
            {
                id: 2,
                speaker: Archivist.name,
                text: "Что ж ты упрямая то такая! Я ведь вполне могу сделать твою жизнь… куда менее приятной.",
            },
            {
                id: 2,
                speaker: "Окружение",
                text: "Девушка покачала головой и промолчала, а мужчина продолжил.",
            },
            {
                id: 2,
                speaker: Archivist.name,
                text: "Всё отмалчиваешься, а ведь я к тебе со всем сердцем!",
                choice: shieldChoice
            }

        ]
    }
}

export default Scene3