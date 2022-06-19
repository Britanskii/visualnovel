import OneStory from "./OneStory";
import TwoStory from "./TwoStory";
import {Hostess} from "../../chars/chars";

import bg from "../../../res/backgrounds/2.png"



const TestStory = (): storyI[] => {

    const nameChoice: choiceI[] = [
        {
            text: 'Красивое имя.',
            // @ts-ignore
            story: OneStory()
        },
        {
            text: 'Как ту деваху из евангелиона?.',
            // @ts-ignore
            story: TwoStory()
        },
    ]

    return [
        {
            id: 1,
            characters: [Hostess.main],
            speaker: Hostess.name,
            text: "Не в моих правилах отговаривать людей от безрассудства, но не шёл бы ты туда. По крайней мере в одиночку. Не выглядишь ты тем человеком, который способен вернуться оттуда… целым.\n",
            background: bg
        },
        {
            id: 2,
            speaker: "Исследователь",
            text: "Что вы имеете ввиду?",
        },
        {
            id: 3,
            speaker: Hostess.name,
            text: "То и имею ввиду. Уж сколько искателей сокровищ прошло через моё заведение и не счесть. В мире оказывается столько идиотов! Было бы из-за чего туда лезть. Всё уже обобрано подчистую. И половина из них не вернулась из старых тоннелей."
        },
        {
            id: 4,
            characters: [Hostess.angry],
            text: "А те, что вернулись, стали в основном сумасшедшими. Так что мой тебе совет, возвращайся на свою планету - целее будешь. Кстати, если ты не вернёшься за своими вещами через три дня, они официально становятся собственностью Гуся. Не раньше и не позже.\n"
        },
        {
            id: 5,
            speaker: "Исследователь",
            text: "Вот уж спасибо, что предупредили. Случайно леди не там оставила свою руку?",
        },
        {
            id: 6,
            speaker: Hostess.fullname,
            characters: [Hostess.happy],
            text: "(громко смеётся)  Леди!... Ахха, вот уж насмешил! Зови меня просто Аска.",
            choice: nameChoice
        },
    ]
}

export default TestStory