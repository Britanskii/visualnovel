import space from "../../res/backgrounds/space.jpg"
import water from "../../res/backgrounds/water.png"
import black from "../../res/backgrounds/black.jpg"
import ships from "../../res/backgrounds/ships.png"
import parlament from "../../res/backgrounds/parlament.png"

import lavronda from "../../res/backgrounds/lavronda.png"
import lavronda2 from "../../res/backgrounds/lavronda2.png"
import lavronda3 from "../../res/backgrounds/lavronda3.png"
import lavronda4 from "../../res/backgrounds/lavronda4.png"

import ship from "../../res/backgrounds/ship.png"
import ship_attack from "../../res/backgrounds/ship_attack.png"

import city from "../../res/backgrounds/sity.png"

import z from "../../res/backgrounds/z.png"

import light from "../../res/backgrounds/light.png"
import light2 from "../../res/backgrounds/light2.png"
import light3 from "../../res/backgrounds/light3.png"
import light4 from "../../res/backgrounds/light4.png"
import light5 from "../../res/backgrounds/light5.png"

import attack from "../../res/backgrounds/attack.png"

export const chapter1: chapter = {
    lavronda,
    lavronda2,
    lavronda3,
    lavronda4,

    space,
    water,
    black,
    ships,
    parlament,

    ship,
    ship_attack,

    city,

    z,

    light,
    light2,
    light3,
    light4,
    light5,

    attack
}


export const getConstants = (chapter: chapter) => {
    //Поменять any
    const constants: any | bgConstants = {}

    for (let key in chapter) {
        constants[key] = key
    }

    return constants
}






