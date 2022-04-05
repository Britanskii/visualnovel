import useCharCreater from "../hooks/createChar";


const ThreeStory = (): storyI[] => {

    const Hostess: character = useCharCreater("Hostess")

    return [
        {
            id: 0,
            characters: [Hostess.main],
            speaker: "Исследователь",
            text: "Что насчёт руки?",
        },
        {
            id: 1,
            speaker: Hostess.fullname,
            text: "Безумцы из Подводного Града оторвали и на дно уволокли.",
        },
        {
            id: 2,
            speaker: "Исследователь",
            text: "Кто?",
        },
        {
            id: 3,
            speaker: Hostess.fullname,
            characters: [Hostess.angry],
            text: "Безумцы из Подводного Града. Не заставляй меня повторять одно и то же. Я очень этого не люблю.",
        },
    ]
}

export default ThreeStory