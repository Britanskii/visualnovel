import {stateGame} from "./enums";


interface charsI {
    name: string
    src: string
}

interface rawCharI {
    "id": string,
    "fullname"?: string,
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
    main?: function,
    happy?: function,
    angry?: function,
    horny?: function,
    shy?: function,
    surprised?: function,
    think?: function,
    name: string | undefined,
    id: string,
    fullname: string | undefined
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

interface storyI {
    backgrounds: string[]
    legend: legend[]
}

interface legend {
    id: number,
    characters?: string[],
    speaker?: string,
    text?: string,
    actions?: []
    choice?: choiceI[]
    nochoice?: storyI
    background?: any
    dialogbox?: typeDialogbox
}

interface choiceI {
    text: string,
    story: storyI
}

interface localSave {
    story: storyI,
    currentStory: legend,
    date: date,
    storyPosition: number,
    id: number
}

interface save {
    state: localSave
    saves: localSave[]
}

interface bgConstants {
    [index: string]: string
}