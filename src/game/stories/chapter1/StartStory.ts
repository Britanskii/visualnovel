import space from "../../../res/backgrounds/space.jpg"
import water from "../../../res/backgrounds/water.png"
import black from "../../../res/backgrounds/black.jpg"
import ships from "../../../res/backgrounds/ships.png"
import parlament from "../../../res/backgrounds/parlament.png"

import lavronda from "../../../res/backgrounds/lavronda.png"
import lavronda2 from "../../../res/backgrounds/lavronda2.png"
import lavronda3 from "../../../res/backgrounds/lavronda3.png"
import lavronda4 from "../../../res/backgrounds/lavronda4.png"

import ship from "../../../res/backgrounds/ship.png"
import ship_attack from "../../../res/backgrounds/ship_attack.png"

import city from "../../../res/backgrounds/sity.png"

import z from "../../../res/backgrounds/z.png"

import light from "../../../res/backgrounds/light.png"
import light2 from "../../../res/backgrounds/light2.png"
import light3 from "../../../res/backgrounds/light3.png"
import light4 from "../../../res/backgrounds/light4.png"
import light5 from "../../../res/backgrounds/light5.png"

import attack from "../../../res/backgrounds/attack.png"
import {Hostess} from "../../chars/chars";


const StartStory = (): storyI[] => {

    // const nameChoice: choiceI[] = [
    //     {
    //         text: 'Красивое имя.',
    //         story: OneStory()
    //     },
    //     {
    //         text: 'Как ту деваху из евангелиона?.',
    //         story: TwoStory()
    //     },
    // ]

    return [
        {
            id: 1,
            background: black,
            speaker: "Рассказчик",
            text: "Вначале была планета",
            characters: [Hostess.main]
        },
        {
            id: 2,
            text: "Терра",
            background: space
        },
        {
            id: 3,
            text: "Жизнь на ней развивалась своим чередом"
        },
        {
            id: 4,
            text: "От маленьких клеток до людей",
            background: water
        },
        {
            id: 5,
            text: "Их развитие не останавливалось ни на секунду",
            background: black,
        },
        {
            id: 6,
            text: "Первобытное общество",
        },
        {
            id: 7,
            text: "Основание и падение империй",
        },
        {
            id: 8,
            text: "Феодализм",
        },
        {
            id: 9,
            text: "Эра географических открытий",
        },
        {
            id: 10,
            text: "Научно-технический прогресс",
        },
        {
            id: 11,
            text: "Получив возможность выбраться за пределы своей планеты",
            background: ships
        },
        {
            id: 12,
            text: "Терране начали активную экспансию космоса",
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
            id: 15,
            text: " ",
            background: parlament
        },
        {
            id: 16,
            text: "Постепенно планеты становились самостоятельными и одна за другой объявляли о своей независимости. Был создан Галактический совет, но со временем в его руках было всё меньше и меньше власти.",
        },
        {
            id: 17,
            text: "Добыча полезных ископаемых и разведка новых миров перестали быть приоритетом совета и на передний план вышли частные организации - корпорации. ",
        },
        {
            id: 18,
            text: "Их было много, но самой выдающейся была и остаётся корпорация “Зодиак”.",
            background: z
        },
        {
            id: 18,
            text: "И все было хорошо...",
        },
        {
            id: 18,
            text: "Пока не случилось это...",
        },
        {
            id: 18,
            text: " ",
            background: light
        },
        {
            id: 19,
            text: " ",
            background: light2
        },
        {
            id: 20,
            text: " ",
            background: light3
        },
        {
            id: 20,
            text: " ",
            background: light4
        },
        {
            id: 20,
            text: " ",
            background: light5
        },
        {
            id: 21,
            text: "Никто доподлинно не знает, что это было. Вдруг совершенно неожиданно вся связь в галактике пропала. Все планеты стали отрезаны друг от друга. Ни один корабль по неизвестной причине не мог вылететь в открытый космос. ",
        },
        {
            id: 22,
            text: "Ужас",
        },
        {
            id: 23,
            text: "Хаос",
        },
        {
            id: 24,
            text: "Паника",
        },
        {
            id: 25,
            text: "Ливронда",
            background: lavronda
        },
        {
            id: 26,
            text: "Наша планета, как и все остальные, оказалась отрезана от всего мира. ",
        },
        {
            id: 27,
            text: "И это случилось именно тогда, когда дальняя телеметрия засекла стремительно приближающиеся ледяные метеориты. \n",
            background: lavronda2
        },
        {
            id: 28,
            text: "В сложившейся ситуации единственное, что успели сделать жители, это посторить ковчеги - огромные мощные корабли на которых можно было бы пережить грядущую катастрофу",
            background: lavronda3
        },
        {
            id: 29,
            text: "Осколки метеоритов осыпали Ливронду, но не это было самым страшным. Вода. Её стало слишком много. Уровень мирового океана поднялся, полностью покрыв всю сушу. Людям ничего не оставалось, как остаться на ковчегах и пытаться жить дальше.\n",
            background: attack
        },
        {
            id: 30,
            text: "Спустя столетия планета не позволяет людям обосноваться на ней - мутировавшие в монстров животные постоянно атакуют из воды; шторма, берущиеся буквально из ниоткуда, постоянно меняющиеся течения, водовороты.\n",
            background: ship
        },
        {
            id: 31,
            text: "Встать на пути хотя бы одного из этих бедствий равносильно самоубийству. А уж если они атакуют одновременно, то порою даже горда не выдерживают натиска и рассыпаются, медленно погружаясь в глубины бездны. Что остаётся жителям планеты?\n",
            background: ship_attack
        },
        {
            id: 32,
            speaker: " ",
            text: "Мало у кого есть билет на фрегаты Корпорации, отправляющиеся в лучшую жизнь.",
            background: water
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
            text: " ",
            background: black
        },
        {
            id: 36,
            text: "Но что если все эти изменения обратимы?",
            background: city
        },
        {
            id: 37,
            text: "Что если можно отменить апокалипсис и вернуть людям хотя бы часть суши, а? Звучит сказочно, я понимаю.",
        },
        {
            id: 38,
            text: " Но что если… чисто теоретически… у меня есть дневник некоего неизвестного ныне профессора, который утверждает, что такое бедственное положение планеты полезно Корпорации, что она искусственно поддерживает около апокалиптическую ситуацию и что на самом деле это можно изменить… \n",
        }



























    ]
}

export default StartStory