import {legend} from "../../interfaces/interfaces";
import toStory from "../../functions/toStory";
import {Player, Setting, Simna, Strangers} from "../../characters/characters";
import {backgroundsScene7} from "../../../data/backgrounds";
import archive_outside_night_close from "../../../res/backgrounds/scene7/archive_outside_night_close.jpg";
import archive_outside_night_open from "../../../res/backgrounds/scene7/archive_outside_night_open.jpg";
import archive_night from "../../../res/backgrounds/scene7/archive_night.jpg";

const Scene7B1 = toStory((): legend[] => {

    const backgrounds = backgroundsScene7

    return [
        {
            speaker: Simna.name,
            text: "Ух! Меня всю трясёт! И как ты только уговорил меня на это?!",
            characters: [Simna.main],
            background: backgrounds.archive_outside_night_close,
            choice: [],
        },
        {
            speaker: Player.name,
            text: "Только не говори, что ты струсила и сейчас бросишь меня. Я же не переживу такого поворота.",
        },
        {
            speaker: Simna.name,
            text: "Нет, конечно нет!",
        },
        {
            speaker: Player.name,
            text: "Тогда веди.",
        },
        {
            speaker: Simna.name,
            text: "Дай мне секундочку собраться с духом!",
        },
        {
            text: "Фуууух!",
        },
        {
            text: "Так, хорошо. Хорошо. На ночь мы закрываем помещения на ключ. Он есть у всех сотрудников архива.",
        },
        {
            speaker: Player.name,
            text: "И больше никакой охраны?",
        },
        {
            speaker: Simna.name,
            text: "Никакой.",
        },
        {
            speaker: Player.name,
            text: "И даже охранника внутри нет?",
        },
        {
            speaker: Simna.name,
            text: "Нету. Да и зачем он? У нас воровать особо нечего. И главный архивариус считает, что на это не стоит тратить лишние средства.",
        },
        {
            speaker: Player.name,
            text: "Ага. Кроме единственного на этом корабле компьютера, сверхредкой бумаги и документов, существующих в единственном экземпляре.",
        },
        {
            speaker: Simna.name,
            text: "... Я как-то раньше не задумывалась над этим.",
        },
        {
            speaker: Player.name,
            text: "\\Интересно, почему я не удивлён?\\",
        },
        {
            speaker: Simna.name,
            text: "Ой, кажется Марк забыл закрыть входную дверь! Вот же растяпа! Сделаю ему завтра выговор. Чувствую себя искателем сокровищ!",
            background:  backgrounds.archive_outside_night_open
        },
        {
            speaker: Player.name,
            text: "По сути так и есть. Так что завтра смело можешь подавать заявку в гильдию, если у вас таковая есть.",
        },
        {
            text: "",
            characters: [],
            background: backgrounds.archive_night
        },
        {
            background: backgrounds.archive_desk
        },
        {
            speaker: Simna.name,
            text: "Ты шутишь! Но мне всё равно приятно! Идём скорее в хранение, а то у меня ощущение, что нас вот-вот застукают!",
            characters: [Simna.main]
        },
        {
            speaker: Simna.name,
            text: "Что это?",
            //development-background
            background: backgrounds.black
        },
        {
            speaker: Player.name,
            text: "Шшш...",
        },
        {
            speaker: Player.name,
            text: "\\Как славно оказалось, что соседняя дверь не заперта, успелось юркнуть в последнюю секунду\\",
            nochoice: "Scene7_strangers"
        },
    ]
})

export default Scene7B1