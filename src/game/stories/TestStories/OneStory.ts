import useCharCreater from "../../hooks/createChar";
import ThreeStory from "./ThreeStory";


const OneStory = (): storyI[] => {

    const Hostess: character = useCharCreater("Hostess")

    return [
        {
            id: 1,
            // characters: [Hostess.main],
            speaker: Hostess.fullname,
            text: "Ну уж спасибо, у тебя имя тоже ничего такое",
            nochoice: ThreeStory()
        }
    ]
}

export default OneStory