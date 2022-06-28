import {choiceI, legend} from "../../interfaces/interfaces";
import toStory from "../../functions/toStory";
import {backgroundsScene3, backgroundsScene4} from "../../../data/backgrounds";
import StoreChoices from "../../mobX/stores/StoreChoices";
import {nameChoice} from "../../interfaces/choices";
import {Player, Stick} from "../../characters/characters";
import background from "../../background/Background";

const Scene4 = toStory((): legend[] => {

    const backgrounds = backgroundsScene4

    const choiceName = StoreChoices.nameChoice

    let name = ""
    let answer = ""

    switch (choiceName) {
        case nameChoice.JOURNALIST: name = "журналист"; answer = "Пишу статью о местном климате."; break
        case nameChoice.HUNTER: name = "искатель сокровищ"; answer = "Слышал, что на Сигме раньше жили одни из самых обеспеченных граждан старой Ливронды."; break
        case nameChoice.ROBOT: name = "робот-пришелец из космоса"; answer = "Вот, решил на досуге, между анализом очередного пакета данных о корреляции курса различного сырья и инспекцией автоматизированного завода по сбору посыльных шаттлов спасти планету [саркастично]."; break
    }

    const trueChoice: choiceI[] = [
        {
            text: `Да, это правда. ${answer}`,
            story: "Tc1"
        },
        {
            text: 'Нет, конечно. Ты совсем дурачок?',
            story: "Tc2"
        }
    ]

    return [
        {
            text: "",
            characters: [],
            background: backgrounds.black
        },
        {
            characters: [Stick.main],
            speaker: Stick.name,
            text: `Эгей! Привет, ${Player.name}!`,
            background: [backgrounds.tavern, backgrounds.tavern_aska]
        },
        {
            speaker: Player.name,
            text: "Ты кто и откуда знаешь моё имя?"
        },
        {
            speaker: Stick.name,
            text: `Я Стик! Тоже живу здесь. Вчера вечером подслушал твой разговор с… Марком кажется. Это правда, что ты ${name}?`
        },
        {
            speaker: Player.name,
            text: "Тогда понятно, что ребёнок забыл в баре. (Мальчишка тараторил так быстро, что невозможно было и слова вставить, пока тот сам не замолкал.)",
            choice: trueChoice
        }
    ]
})

export default Scene4
