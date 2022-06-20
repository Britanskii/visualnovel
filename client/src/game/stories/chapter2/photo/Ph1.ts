import {backgroundsScene3} from "../../../interfaces/enums";
import {Mark} from "../../../chars/chars";
import Ph2 from "./Ph2";
import Ph1_2 from "./Ph1_2.ts";
import {choiceI, storyI} from "../../../interfaces/interfaces";

const Ph1 = (): storyI[] => {

    const backgrounds = backgroundsScene3

    const photoChoice: choiceI[] = [
        {
            text: "И то верно. Смотреть цифру мне не начем. Тогда возьму эти. Через сколько их вернуть?",
            story: Ph2()
        },
        {
            text: "Уж где-нибудь нашёл бы. Неужели Ливорна настолько отсталая планета, что здесь даже [смартфонов] нету?",
            story: Ph1_2()
        }
    ]

    return [
        {
            speaker: Mark.name,
            id: 1,
            text: " Нет, конечно. Ты что, думал, в архив Терры зашёл что-ли? Сразу видно, что ты не с Ливронды. Круто, что тебе есть на чём смотреть цифровые копии, но тут у большинства населения нет таких устройств.",
            choice: photoChoice
        }
    ]
}

export default Ph1