import {makeAutoObservable, toJS} from "mobx";

import StartStory from "../stories/chapter1/StartStory";
import {backgroundsChapter1, typeDialogbox} from "../interfaces/enums";
import Scene3 from "../stories/chapter2/Scene3";
import {choiceI, storyI, save, localSave, legend} from "../interfaces/interfaces";
import StoreGame from "./StoreGame";
import getDateObj from "../functions/getDateObj";
import {log} from "util";

class StoreStory {

    protected storyPosition!: number
    protected background!: string | undefined
    protected backgrounds!: string[]
    protected story!: storyI
    protected currentStory!: legend
    protected nochoice!: storyI[]
    protected text!: string
    protected complete!: boolean
    protected isChoice!: boolean
    protected isSave: boolean

    constructor() {
        makeAutoObservable(this)
        this.isSave = this.getLocalSave() !== null

        this.isSave ? this.initStorySave() : this.initStoryDefault()
    }

    initStoryDefault = () => {
        const storyDefault = StartStory()
        // const storyDefault = Scene3()

        return this.initStory(storyDefault, 0, storyDefault.legend[0])
    }

    initStorySave = () => {
        const save = this.getLocalSave().state
        const {story, id, currentStory} = save

        this.initStory(story, id, currentStory)
    }

    initStory = (story: storyI, id: number, currentStory: legend) => {
        this.story = story
        this.storyPosition = id
        this.currentStory = currentStory
        this.background = this.currentStory.background
        this.backgrounds = this.story.backgrounds
        this.complete = false
    }

    loadStory = (story: storyI, currentStory: legend, position: number) => {
        this.story = story
        this.currentStory = currentStory
        this.storyPosition = position
        this.background = currentStory.background
    }

    getStory = (): storyI => this.story

    getCurrentStory = (): legend => {
        return this.currentStory
    }

    setCurrentStory = (storyPosition: number) => {

        const {background, dialogbox, speaker, characters, text} = this.currentStory

        this.currentStory = {choice: [], background, dialogbox, speaker, characters, text, ...this.story.legend[storyPosition]}
    }

    setBackgrounds = (backgrounds: string[]): void => {
        if (backgrounds.length > 0) {
            this.backgrounds = backgrounds
        }
    }

    getBackgrounds = (): string[] => this.backgrounds

    setBackgorund = (src: string): void => {
        this.background = src
    }

    getBackground = (): string => {
        return this.currentStory.background!
    }

    getChars = (): string[] => {
        return this.currentStory.characters!
    }

    setText = (text: string): void => {
        this.text = text
    }

    getText = (): string => {
        return this.currentStory.text!
    }

    setComplete = (state: boolean): void => {
        this.complete = state
    }

    getComplete = (): boolean => {
        return this.complete
    }

    getSpeaker = (): string => {
        return this.currentStory.speaker!
    }

    setTypeDialogBox = (type: typeDialogbox) => {
        this.currentStory.dialogbox = type
    }

    getTypeDialogBox = (): typeDialogbox => {
        if (this.currentStory.dialogbox === undefined) return typeDialogbox.BOX
        return this.currentStory.dialogbox
    }

    getIsChoice = () => this.isChoice

    setIsChoice = (isChoice: boolean) => {
        this.isChoice = isChoice
    }

    getChoices = (): choiceI[] => {
        return this.currentStory.choice!
    }

    getNoChoice = (): storyI => {
        return this.currentStory.nochoice!
    }

    getLocalSave = () => JSON.parse(<string>localStorage.getItem("story"))

    getLocalAllSaves = () => {
        const save = this.getLocalSave()

        if (!!save) {
            // const checkAndSetKey = (key: string, localSave: localSave) => {
            //     if (key in localSave) {
            //         // @ts-ignore
            //         localSave.currentStory[key] = localSave.story[localSave.storyPosition][key]
            //
            //         // @ts-ignore
            //         localSave.currentStory = null
            //     }
            // }

            // const saves = save.saves.map(({currentStory, story, storyPosition}: localSave) => {
            // console.log(save)
            // if ("choice" in currentStory) {
            //     console.log(story[storyPosition].choice)
            //     currentStory.choice = story[storyPosition].choice
            // }
            // checkAndSetKey("nochoice", save)
            // checkAndSetKey("choice", save)

            // return save
            // })

            return save.saves
        } else {
            return []
        }
    }

    getLocalSaveState = () => {
        const save = this.getLocalSave()

        if (!!save) {
            return save.saves
        } else {
            return false
        }
    }

    setLocalSave = (fastSave: boolean) => {
        const {month, day, year, hours, minutes, seconds} = getDateObj(new Date())

        const date = day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds

        const state: localSave = {
            story: this.getStory(),
            id: this.getStoryPosition(),
            currentStory: this.currentStory,
            date,
            storyPosition: this.getStoryPosition()
        }

        const saves = this.getLocalSave() ? this.getLocalSave().saves : []

        const localSave: save = fastSave ? {state, saves: [...saves, state]} : {state, saves}

        localStorage.setItem("story", JSON.stringify(localSave))
    }

    setStoryPosition = (position: number): void => {
        if (position >= 0 && position < this.story.legend.length) {
            this.storyPosition = position
            this.setCurrentStory(this.storyPosition)
        }
    }

    incStoryPosition = (): void => {
        if (this.storyPosition < this.story.legend.length - 1) {
            this.storyPosition += 1
        }
    }

    decStoryPosition = (): void => {
        if (this.storyPosition > 0) {
            this.storyPosition -= 1
            this.currentStory = {...this.currentStory, ...this.story.legend[this.storyPosition]}
        }
    }

    getStoryPosition = (): number => {
        return this.storyPosition
    }

    setStory = (story: storyI) => {
        // console.log('set')
        //Установка новой истории
        this.story = story

        //Обнуление позиции
        this.storyPosition = 0

        //Установка новых картинок
        this.setBackgrounds(story.backgrounds)

        //Идём дальше по сюжету
        this.setNextLegend()
    }

    setNextLegend = () => {
        // console.log('next')
        //Следующая легенда
        this.incStoryPosition()
        this.setCurrentStory(this.storyPosition)

        // console.log(toJS(this.story.legend))
        // console.log(this.storyPosition)
        // console.log(toJS(this.currentStory))

        //Сохранение
        this.setLocalSave(false)
    }
}

export default new StoreStory()