import {makeAutoObservable, toJS} from "mobx";

import StartStory from "../stories/chapter1/StartStory";
import {backgroundsChapter1, typeDialogbox} from "../interfaces/enums";
import Scene3 from "../stories/chapter2/Scene3";
import {choiceI, storyI, save} from "../interfaces/interfaces";
import StoreGame from "./StoreGame";

class StoreStory {

    protected storyPosition!: number
    protected background!: string | undefined
    protected backgrounds!: backgroundsChapter1
    protected story!: storyI[]
    protected currentStory!: storyI
    protected choices!: choiceI[] | undefined
    protected nochoice!: storyI[]
    protected text!: string
    protected complete!: boolean
    protected isSave: boolean

    constructor() {
        makeAutoObservable(this)
        this.isSave = this.getLocalSave() !== null

        this.isSave ? this.initStorySave() : this.initStoryDefault()
    }

    initStoryDefault = () => {
        const storyDefault = StartStory()
        // const storyDefault = Scene3()

        return this.initStory(storyDefault, 0, storyDefault[0])
    }

    initStorySave = () => {
        const save = this.getLocalSave().state
        const {story, id, currentStory} = save

        this.initStory(story, id, currentStory)
    }

    initStory = (story: storyI[], id: number, currentStory: storyI) => {
        this.story = story
        this.storyPosition = id
        this.currentStory = currentStory
        this.choices = this.currentStory.choice
        this.background = this.currentStory.background
        this.complete = false
    }

    setStory = (story: storyI[]) => {
        story[0] = {background: this.getBackground(), characters: this.getChars(), ...story[0]}

        this.story = [...this.story, ...story]

        this.incStoryPosition()

        this.currentStory = this.story[this.storyPosition]

    }

    setSaveStory = (story: storyI[]) => {
        this.story = story
    }

    getStory = (): storyI[] => this.story

    getCurrentStory = (): storyI => {
        return this.currentStory
    }

    setCurrentStory = (storyPosition: number) => {
        this.currentStory = {...this.currentStory, ...this.story[storyPosition]}
    }

    setBackgorunds = (backgrounds: backgroundsChapter1): void => {
        console.log(backgrounds)
        this.backgrounds = backgrounds
    }

    getBackgrounds = (): backgroundsChapter1 => this.backgrounds

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

    getChoices = (): choiceI[] | undefined => {
        return this.currentStory.choice
    }

    getNoChoice = (): storyI[] => {
        return <storyI[]>this.currentStory.nochoice!
    }

    getLocalSave = () => JSON.parse(<string>localStorage.getItem("story"))

    setLocalSave = (fastSave: boolean) => {
        const state = {story: this.getStory(), id: this.getStoryPosition(), currentStory: this.currentStory}

        const saves = !this.getLocalSave() ? this.getLocalSave().saves : []

        const localSave: save = fastSave ?  {state, saves: [...saves, state]} : {state, saves}

        localStorage.setItem("story", JSON.stringify(localSave))
    }

    setStoryPosition = (position: number): void => {
        if (position >= 0 && position < this.story.length) {
            this.storyPosition = position
            this.setCurrentStory(this.storyPosition)
        }
    }

    incStoryPosition = (): void => {
        if (this.storyPosition < this.story.length - 1) {

            // console.log(toJS(this.currentStory))
            // console.log(toJS(this.story[this.storyPosition]))
            // console.log(toJS({...this.currentStory, ...this.story[this.storyPosition]}))

            this.storyPosition += 1

            this.setCurrentStory(this.storyPosition)
            this.setLocalSave(false)
        }
    }

    decStoryPosition = (): void => {
        if (this.storyPosition > 0) {
            this.storyPosition -= 1
            this.currentStory = {...this.currentStory, ...this.story[this.storyPosition]}
        }
    }

    getStoryPosition = (): number => {
        return this.storyPosition
    }
}

export default new StoreStory()