import {backgroundsChapter1, typeDialogbox} from "../../interfaces/enums";
import StoreStory from "../../stores/StoreStory";


const StartStory = (): initStoryI => {

    const backgrounds = backgroundsChapter1

    return {
        backgrounds,
        history: [
            {
                id: 1,
                background: backgrounds.prolouge1,
                dialogbox: typeDialogbox.STRINGS,
            },
            {
                id: 2,
                background: backgrounds.prolouge2
            },
            {
                id: 2,
                background: backgrounds.prolouge3
            },
            {
                id: 4,
                background: backgrounds.prolouge4

            },
            {
                id: 5,
                background: backgrounds.water

            },
            {
                id: 6,
                background: backgrounds.prolouge6

            },
            {
                id: 7,
                background: backgrounds.prolouge7

            },
            {
                id: 12,
                text: "Терране начали активную экспансию космоса",
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
                text: "",
                background: backgrounds.prolouge8
            },
            {
                id: 18,
                background: backgrounds.prolouge9
            },
            {
                id: 18,
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
                background: backgrounds.prolouge10
            },
            {
                id: 21,
                background: backgrounds.prolouge11
            },
            {
                id: 22,
                background: backgrounds.prolouge12
            },
            {
                id: 25,
                background: backgrounds.prolouge13
            },
            {
                id: 26,
                text: "Наша планета, как и все остальные, оказалась отрезана от всего мира. ",
                background: backgrounds.lavronda2
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
                text: "Встать на пути хотя бы одного из этих бедствий равносильно самоубийству. А уж если они атакуют одновременно, то порою даже горда не выдерживают натиска и рассыпаются, медленно погружаясь в глубины бездны. Что остаётся жителям планеты?\n",
                background: backgrounds.ship_attack
            },
            {
                id: 32,
                speaker: "Исследователь",
                text: "Мало у кого есть билет на фрегаты Корпорации, отправляющиеся в лучшую жизнь.",
                background: backgrounds.water,
                dialogbox: typeDialogbox.BOX
            },
            {
                id: 33,
                text: "Это правда. И жителям планеты остаётся только смириться. Бороться на пределе сил, выживать...",
            },
            {
                id: 34,
                text: "Воистину",
            },
            {
                id: 35,
                text: "",
                background: backgrounds.black
            },
            {
                id: 36,
                text: "Но что если все эти изменения обратимы?",
                background: backgrounds.city
            },
            {
                id: 37,
                text: "Что если можно отменить апокалипсис и вернуть людям хотя бы часть суши, а? Звучит сказочно, я понимаю.",
            },
            {
                id: 38,
                text: "Но что если… чисто теоретически… у меня есть дневник некоего неизвестного ныне профессора, который утверждает, что такое бедственное положение планеты полезно Корпорации, что она искусственно поддерживает около апокалиптическую ситуацию и что на самом деле это можно изменить… \n",
            }
        ]
    }
}

export default StartStory