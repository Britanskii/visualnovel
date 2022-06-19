import prolouge3Img from "../../res/backgrounds/prolouge/3.jpg"

import lavrondaImg from "../../res/backgrounds/chapter1/lavronda.png";
import lavronda2Img from "../../res/backgrounds/chapter1/lavronda2.png";
import lavronda3Img from "../../res/backgrounds/chapter1/lavronda3.png";
import lavronda4Img from "../../res/backgrounds/chapter1/lavronda4.png";
import waterImg from "../../res/backgrounds/chapter1/water.jpg";
import water3Img from "../../res/backgrounds/chapter1/water_3.jpg";
import water2Img from "../../res/backgrounds/chapter1/water_2.jpg";
import blackImg from "../../res/backgrounds/black.jpg";
import shipsImg from "../../res/backgrounds/chapter1/ships.png";
import parlamentImg from "../../res/backgrounds/chapter1/parlament.png";
import shipImg from "../../res/backgrounds/chapter1/ship.png";
import ship_attackImg from "../../res/backgrounds/chapter1/ship_attack.png";
import cityImg from "../../res/backgrounds/chapter1/sity.png";
import zImg from "../../res/backgrounds/chapter1/z.png";
import lightImg from "../../res/backgrounds/chapter1/light.png";
import light2Img from "../../res/backgrounds/chapter1/light2.png";
import light3Img from "../../res/backgrounds/chapter1/light3.png";
import light4Img from "../../res/backgrounds/chapter1/light4.png";
import light5Img from "../../res/backgrounds/chapter1/light5.png";
import attackImg from "../../res/backgrounds/chapter1/attack.png";
import attack2Img from "../../res/backgrounds/chapter1/attack_2.jpg";
import tavernImg from "../../res/backgrounds/tavern.jpg";

import archiveImg from "../../res/backgrounds/scene3/archive.jpg"
import archive_markImg from "../../res/backgrounds/scene3/archive_mark.jpg"

export enum stateGame {
    MENU,
    SETTINGS,
    GAME
}

export enum typeDialogbox {
    STRINGS,
    BOX,
    CENTER
}

export enum adaptive {
    TWOK,
    FULLHD,
    HD,
    MOBILE
}

export enum char {
    rin,
    hostess,
}

export enum backgroundsName {
    backgroundsChapter1
}

export enum backgroundsScene3 {
    black = blackImg,

    archive = archiveImg,
    archive_mark = archive_markImg
}

export enum backgroundsChapter1 {
    prolouge3 = prolouge3Img,

    lavronda = lavrondaImg,
    lavronda2 = lavronda2Img,
    lavronda3 = lavronda3Img,
    lavronda4 = lavronda4Img,

    water = waterImg,
    water2 = water2Img,
    water3 = water3Img,

    parlament = parlamentImg,

    ships = shipsImg,
    ship = shipImg,
    ship_attack = ship_attackImg,

    city = cityImg,

    z = zImg,

    light = lightImg,
    light2 = light2Img,
    light3 = light3Img,
    light4 = light4Img,
    light5 = light5Img,

    attack = attackImg,
    attack2 = attack2Img,

    black = blackImg,

    tavern = tavernImg
}