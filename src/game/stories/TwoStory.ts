import useCharCreater from "../hooks/createChar";
import ThreeStory from "./ThreeStory";


const TwoStory = (): storyI[] => {

    const Hostess: character = useCharCreater("Hostess")

    return [
        {
            id: 0,
            characters: [Hostess.angry],
            speaker: Hostess.fullname,
            text: "Да, да. Очень смешно. Может будешь острить за дверью?",
        },
        {
            id: 1,
            speaker: "Исследователь",
            text: "Извините, не хотел",
        },
        {
            id: 3,
            characters: [Hostess.main],
            text: "Извиняться, салага, будешь перед Кадыровом. Ты-что то спросить ещё хотел?",
        },
        {
            id: 4,
            nochoice: ThreeStory()
        }
    ]
}

export default TwoStory