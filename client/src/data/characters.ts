import RinMain from "../res/chars/rin/normal.png"
import RinAngry from "../res/chars/rin/angry.png"
import RinHappy from "../res/chars/rin/happy.png"

import markAngry from "../res/chars/mark/angry.webp"
import markHappy from "../res/chars/mark/happy.webp"
import markMain from "../res/chars/mark/main.webp"
import markShy from "../res/chars/mark/shy.webp"
import markSurprised from "../res/chars/mark/surprised.webp"
import markThink from "../res/chars/mark/think.webp"

import simnaMain from "../res/chars/simna/main.webp"

import archivistMain from "../res/chars/archivist/main.webp"
import {dataRawCharI} from "../game/interfaces/interfaces";

import stickMain from "../res/chars/stick/main.webp"


const data: dataRawCharI = {
    Player: {
        id: "player",
        name: "Исследователь",
        "color": "#FFF",
        "fontFamily": "Times New Roman",
        "images": {}
    },
    "Hostess": {
        id: "hostess",
        "fullname": "Аска",
        "name": "Хозяйка таверны",
        "color": "#FFF",
        "fontFamily": "Times New Roman",
        "images": {
            "main": RinMain,
            "happy": RinHappy,
            "angry": RinAngry,
        }
    },
    Mark: {
        id: "mark",
        name: "Марк",
        color: "#FFF",
        fontFamily: "Times New Roman",
        images: {
            angry: markAngry,
            happy: markHappy,
            main: markMain,
            shy: markShy,
            surprised: markSurprised,
            think: markThink
        }
    },
    Simna: {
        id: "simna",
        name: "Симна",
        color: "#FFF",
        fontFamily: "Times New Roman",
        images: {
            main: simnaMain
        }
    },
    Archivist: {
        id: "archivist",
        name: "Главный архивариус",
        color: "#FFF",
        fontFamily: "Times New Roman",
        images: {
            main: archivistMain
        }
    },
    Stick: {
        name: "Стик",
        color: "#FFF",
        fontFamily: "Times New Roman",
        images: {
            main: stickMain
        }
    }
}

export default data