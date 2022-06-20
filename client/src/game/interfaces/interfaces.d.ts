import {stateGame} from "./enums";


interface charsI {
    name: string
    src: string
}

interface rawCharI {
    "fullname"?: string
    "name"?: string,
    "color"?: string,
    "fontFamily"?: string,
    "images": {
        "main"?: string,
        "happy"?: string,
        "angry"?: string,
        "shy"?: string,
        "surprised"?: string,
        "think"?: string,
        "horny"?: string,
    }
}

interface dataRawCharI {
    [index: string]: rawCharI
}

interface character {
    main: function,
    happy: function,
    angry: function,
    horny: function,
    name: string | undefined,
    fullname: string | undefined,
    actions: {}
}

interface dataRawSpineChar {
    [index: string]: rawChar
}

interface rawSpineChar {
    "fullname"?: string
    "name"?: string,
    "color"?: string,
    "fontFamily"?: string,
    "res": {
        "prefix": string,
        "json": string,
        "atlas": string,
    }
}

interface initStoryI {
    backgrounds: any
    history: storyI[]
}

interface storyI {
    id: number,
    characters?: function[],
    speaker?: string,
    text?: string,
    actions?: []
    choice?: choiceI[]
    nochoice?: storyI[] | initStoryI
    background?: any
    dialogbox?: typeDialogbox
}

interface choiceI {
    text: string,
    story: initStoryI
}

interface save {
    story: initStoryI,
    currentStory: storyI,
    id: number
}

interface saveGame {
    gameState: stateGame,
    saves: save[]
}

interface bgConstants {
    [index: string]: string
}