import {Archivist, Mark, Player, Simna} from "../../../chars/chars";
import { backgroundsScene3} from "../../../interfaces/enums";
import {initStoryI} from "../../../interfaces/interfaces";

const Sc_2 = (): initStoryI => {

    const backgrounds = backgroundsScene3

    return {
        backgrounds,
        history:  [
            {
                id: 1,
                speaker: Player.name,
                text: "Вы разве не видите, что ваше поведение неприятно девушке? Прекратите вести себя как свинья и донимать её.",
            },
            {
                id: 1,
                speaker: Archivist.name,
                text: "А ты вообще кто такой, а?! Ты какое право имеешь рот свой на меня разевать?! Я главный архивариус!",
            },
            {
                id: 1,
                characters: [Archivist.main, Simna.main, Mark.main],
                speaker: Mark.name,
                text: "Вот планы…",
            },
            {
                id: 1,
                speaker: Archivist.name,
                text: "Так ты за документами пришёл?! Очередной искатель сокровищ в старых полузатопленных и полуразрушенных помещениях Ковчегов! Дармоеды бесполезные! Ничего не получишь! Марк, не смей давать ему документы и делать копии! Охрана! Выведите этого беспардонного идиота отсюда!",
            },
            {
                id: 2,
                characters: [],
                text: "",
                background: backgrounds.archive_angry
            },
            {
                id: 2,
                background: backgrounds.archive_out
            },
            {
                id: 2,
                background: backgrounds.archive_security
            },
            {
                id: 1,
                speaker: Player.name,
                text: "Полёт со ступеней Архива оказался стремительным и болезненным. Кажется придётся искать иные пути доступа к информации. Хорошо что я захватил с собой пару испорченных карточек с номерами нужных документов. Может и пригодятся.",
            },
            {
                id: 1,
                speaker: Simna.name,
                text: "Спасибо что заступился за меня.",
                background: backgrounds.archive_outside,
                characters: [Simna.main]
            },
            {
                id: 1,
                text: "Это было опрометчиво, но всё равно спасибо!",
            },
            {
                id: 1,
                speaker: Player.name,
                text: "Пожалуйста. Эх! Теперь не видать мне документов!",
            },
            {
                id: 1,
                speaker: Simna.name,
                text: "Ох, ведь это всё из-за меня! А я даже не знаю, чем тебе помочь! Ведь копии делает Марк, у меня это не получается!",
            },
            {
                id: 1,
                speaker: Player.name,
                text: "У меня есть пара идей, как ты можешь мне помочь.",
            },
            {
                id: 1,
                speaker: Simna.name,
                text: "Правда? Я готова! Хотелось бы отплатить за доброе дело!",
            },
            {
                id: 1,
                speaker: Player.name,
                text: "Не здесь. Приходи сегодня вечером в трактир “Морской Гусь”. Я там сейчас остановился. Там и поговорим.",
            },
        ]
    }
}

export default Sc_2