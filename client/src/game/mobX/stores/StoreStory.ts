import {makeAutoObservable, toJS} from "mobx";

import StartStory from "../../stories/chapter1/StartStory";
import {typeDialogbox} from "../../interfaces/enums";
import {choiceI, legend, localSave, storyI, save} from "../../interfaces/interfaces";
import LocalSave from "../entities/LocalSave";
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
    protected save: save
    protected saves: localSave[]

    constructor() {
        makeAutoObservable(this)
        this.isSave = LocalSave.getSave() !== null

        this.isSave ? this.initStorySave() : this.initStoryDefault()

        this.save = LocalSave.getSave()
        this.saves = LocalSave.getSavesAll()
    }

    initStoryDefault = () => {
        const storyDefault = StartStory()
        // const storyDefault = Scene3()

        return this.initStory(storyDefault, 0, storyDefault.legend[0])
    }

    initStorySave = () => {
        const save = LocalSave.getSave().state
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

    setSaves = (saves: localSave[]) => {
        console.log('change!')
        this.saves = saves
    }

    getSaves = (): localSave[] => this.saves

    setSave = (fastSave: boolean = false) => {
        LocalSave.setSave(fastSave)
    }

    getSave = (): save => this.save

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
        this.setSave()
    }
}

export default new StoreStory()