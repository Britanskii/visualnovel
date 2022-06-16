//Chars

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
        "horny"?: string,
    }
}

interface dataRawCharI {
    [index: string]: rawCharI
}

interface character
{
    main: function,
    happy: function,
    angry: function,
    horny: function,
    name: string | undefined,
    fullname: string | undefined,
    actions: {

    }
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
    id: number,
    characters?: function[],
    speaker?: string,
    text?: string,
    actions?: []
    choice?: choiceI[]
    nochoice?: storyI[]
    background?: string
    dialogbox?: string
}

interface choiceI {
    text: string,
    story: storyI[]
}

interface chapter {
    [index: string]: string
}

interface bgConstants {
    [index: string]: string
}

enum char {
    rin = "Rin",
    hostess = "Hostess"
}