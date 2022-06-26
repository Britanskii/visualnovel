import {typeDialogbox} from "../../interfaces/enums";
import {Mark, Player} from "../../characters/characters";
import Nc1 from "./nameChoice/Nc1";
import Nc2 from "./nameChoice/Nc2";
import Nc3 from "./nameChoice/Nc3";
import {choiceI, legend, storyI} from "../../interfaces/interfaces";
import StoreStory from "../../mobX/stores/StoreStory";
import toStory from "../../functions/toStory";
import {backgroundsChapter1} from "../../../data/backgrounds";

const backgrounds = backgroundsChapter1

const StartStory = toStory( (): legend[] => {

    const nameChoice: choiceI[] = [
        {
            text: 'Журналист с Терры.',
            story: "Nc1"
        },
        {
            text: 'Искатель сокровищ.',
            story: "Nc2"
        },
        {
            text: 'Робот-пришелец из космоса для спасения Ливронды.',
            story: "Nc3"
        },
    ]

    return [
        {
            id: 1,
            background: [backgrounds.black, backgrounds.archive_angry],
            text: "Вначале была планета",
            choice: [],
            dialogbox: typeDialogbox.CENTER,
        },
        {
            id: 2,
            text: "Терра",
        },
        {
            id: 2,
            text: "",
            background: backgrounds.prolouge3
        },
        {
            id: 4,
            text: "Жизнь на ней развивалась своим чередом",
            background: backgrounds.black

        },
        {
            id: 5,
            text: "От маленьких клеток до людей",

        },
        {
            id: 6,
            text: "",
            background: backgrounds.water
        },
        {
            id: 7,
            text: "Первобытное общество\n" +
                "Основание и падение империй\n" +
                "Феодализм\n" +
                "Эра географических открытий\n" +
                "Научно-технический прогресс",
            background: backgrounds.black

        },
        {
            id: 12,
            text: "Терране начали активную экспансию космоса",
            dialogbox: typeDialogbox.STRINGS,
            background: backgrounds.ships
        },
        {
            id: 13,
            text: "И успешно заселили множество планет, не встретив другие столь же разумные формы жизни.",
        },
        {
            id: 14,
            text: "Это продолжалось какое-то время.",
        },
        {
            id: 16,
            text: "Постепенно планеты становились самостоятельными и одна за другой объявляли о своей независимости. Был создан Галактический совет, но со временем в его руках было всё меньше и меньше власти.",
            background: backgrounds.parlament
        },
        {
            id: 17,
            text: "Добыча полезных ископаемых и разведка новых миров перестали быть приоритетом совета и на передний план вышли частные организации - корпорации. ",
        },
        {
            id: 18,
            text: "Их было много, но самой выдающейся была и остаётся корпорация “Зодиак”.",
            background: backgrounds.z
        },
        {
            id: 18,
            text: "И всё было хорошо...",
            dialogbox: typeDialogbox.CENTER,
            background: backgrounds.black
        },
        {
            id: 18,
            text: "Пока не случилось это...",
        },
        {
            id: 18,
            text: "",
            background: backgrounds.light
        },
        {
            id: 19,
            background: backgrounds.light2
        },
        {
            id: 20,
            background: backgrounds.light3
        },
        {
            id: 20,
            background: backgrounds.light4
        },
        {
            id: 20,
            background: backgrounds.light5
        },
        {
            id: 21,
            text: "Никто доподлинно не знает, что это было.\n" +
                "Вдруг совершенно неожиданно вся связь в галактике пропала.",
            background: backgrounds.black
        },
        {
            id: 21,
            text: "Все планеты стали отрезаны друг от друга.\n" +
                "Ни один корабль по неизвестной причине\n" +
                "не мог вылететь в открытый космос."
        },
        {
            id: 22,
            text: "",
            background: backgrounds.water
        },
        {
            id: 25,
            text: "Ужас\n" +
                "Хаос\n" +
                "Паника",
            background: backgrounds.black
        },
        {
            id: 23,
            text: "Ливронда",
        },
        {
            id: 26,
            text: "Наша планета, как и все остальные, оказалась отрезана от всего мира. ",
            background: backgrounds.lavronda2,
            dialogbox: typeDialogbox.STRINGS
        },
        {
            id: 27,
            text: "И это случилось именно тогда, когда дальняя телеметрия засекла стремительно приближающиеся ледяные метеориты. \n",
            background: backgrounds.lavronda3
        },
        {
            id: 28,
            text: "В сложившейся ситуации единственное, что успели сделать жители, это посторить ковчеги - огромные мощные корабли на которых можно было бы пережить грядущую катастрофу",
            background: backgrounds.attack
        },
        {
            id: 29,
            text: "Осколки метеоритов осыпали Ливронду, но не это было самым страшным. Вода. Её стало слишком много. Уровень мирового океана поднялся, полностью покрыв всю сушу. Людям ничего не оставалось, как остаться на ковчегах и пытаться жить дальше.\n",
            background: backgrounds.attack2
        },
        {
            id: 30,
            text: "Спустя столетия планета не позволяет людям обосноваться на ней - мутировавшие в монстров животные постоянно атакуют из воды; шторма, берущиеся буквально из ниоткуда, постоянно меняющиеся течения, водовороты.\n",
            background: backgrounds.ship
        },
        {
            id: 31,
            text: "Встать на пути хотя бы одного из этих бедствий равносильно самоубийству. А уж если они атакуют одновременно, то порою даже города не выдерживают натиска и рассыпаются, медленно погружаясь в глубины бездны. Что остаётся жителям планеты?\n",
            background: backgrounds.ship_attack
        },
        {
            id: 32,
            speaker: "Незнакомец 1",
            text: "Мало у кого есть билет на фрегаты Корпорации, отправляющиеся в лучшую жизнь.",
            background: backgrounds.water,
            dialogbox: typeDialogbox.BOX
        },
        {
            id: 33,
            speaker: "Незнакомец 2",
            text: "Это правда. И жителям планеты остаётся только смириться. Бороться на пределе сил, выживать...",
        },
        {
            id: 34,
            speaker: "Незнакомец 1",
            text: "Воистину",
        },
        {
            id: 35,
            text: "",
            background: backgrounds.black
        },
        {
            id: 36,
            speaker: "Незнакомец 2",
            text: "Но что если все эти изменения обратимы?",
        },
        {
            id: 37,
            text: "Что если можно отменить апокалипсис и вернуть людям хотя бы часть суши, а? Звучит сказочно, я понимаю.",
            background: backgrounds.city
        },
        {
            id: 38,
            text: "Но что если… чисто теоретически… у меня есть дневник некоего неизвестного ныне профессора, который утверждает, что такое бедственное положение планеты полезно Корпорации.",
            background: backgrounds.diary
        },
        {
            id: 38,
            text: "Что она искусственно поддерживает около апокалиптическую ситуацию и что на самом деле это можно изменить…",
        },
        {
            id: 35,
            text: "",
            background: backgrounds.water
        },
        {
            id: 35,
            background: backgrounds.water2
        },
        {
            id: 35,
            background: backgrounds.water3
        },
        {
            id: 35,
            speaker: Mark.name,
            text: "Нуу, я бы сказал, что ты любитель фантастики. Вот ты кто. Невозможно обратить последствия такого масштаба.",
            characters: [Mark.main],
            background: backgrounds.tavern
        },
        {
            id: 36,
            speaker: Player.name,
            text: "Твои сомнения мне понятны. Я и сам так думал, пока не прочёл всё более подробно. Всё, конечно, не вернуть. Но хотя бы часть суши, что значительно расширит владения людей и уменьшит территорию подводных монстров."
        },
        {
            id: 36,
            text: "Это бы буквально переломило сложившуюся ситуацию в пользу людей и в дневнике есть довольно подробные выкладки и инструкции как это можно было бы сделать."
        }
        ,
        {
            id: 36,
            speaker: Mark.name,
            text: "Хм… Пожалуй. И что ты предлагаешь? Не просто же так ты мне тут уже морские черти знают сколько мозги промываешь."
        },
        {
            id: 36,
            speaker: Player.name,
            text: "Не просто так. Мне нужен надёжный помощник в этом деле. Который сможет оказать посильную помощь и предоставить старые планы всех Ковчегов города."
        },
        {
            id: 36,
            speaker: Mark.name,
            text: "То есть ты мне почти час мозг компостировал только для того, чтобы заполучить старые планы кораблей?"
        },
        {
            id: 36,
            speaker: Player.name,
            text: "..."
        },
        {
            id: 36,
            speaker: Mark.name,
            text: "Пффф. И надо было столько времени тратить на это. Приходи завтра в Главный Архив и оформи заказ на документы. Они же в свободном доступе, дурачок. Кому нужно это бесполезное барахло?"
        },
        {
            id: 36,
            text: "А ты вообще кто, парень? Что-то не очень ты на местных похож.",
            choice: nameChoice
        },
    ]
}, backgrounds)

export default StartStory