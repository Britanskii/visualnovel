import {makeAutoObservable, toJS} from "mobx";

import StartStory from "../stories/chapter1/StartStory";
import {backgroundsChapter1, typeDialogbox} from "../interfaces/enums";
import Scene3 from "../stories/chapter2/Scene3";

class StoreStory {

    protected storyPosition!: number
    protected background!: string | undefined
    protected backgrounds!: backgroundsChapter1
    protected story!: initStoryI
    protected currentStory!: storyI
    protected choices!: choiceI[] | undefined
    protected nochoice!: storyI[]
    protected text!: string
    protected complete!: boolean
    protected isSave: boolean

    constructor() {
        makeAutoObservable(this)

        this.isSave = this.getLocalSave() !== null

        !this.isSave ? this.initStorySave() : this.initStoryDefault()
    }

    initStoryDefault = () => {
        // const storyDefault = StartStory()
        const storyDefault = Scene3()

        return this.initStory(storyDefault, 0, storyDefault.history[0])
    }

    initStorySave = () => {
        const {story, id, currentStory} = this.getLocalSave()

        this.initStory(story, id, currentStory)
    }

    initStory = (story: initStoryI, id: number, currentStory: storyI) => {
        this.story = story
        this.storyPosition = id
        this.backgrounds = this.story.backgrounds
        this.currentStory = currentStory
        this.choices = this.currentStory.choice
        this.background = this.currentStory.background
        this.complete = false
    }

    setStory = (story: initStoryI) => {
        story.history[0] = {background: this.getBackground(), characters: this.getChars(), ...story.history[0]}

        this.story.history = [...this.story.history, ...story.history]

        this.incStoryPosition()

        this.currentStory = this.story.history[this.storyPosition]

        this.backgrounds = story.backgrounds
    }

    setSaveStory = (story: storyI[]) => {
        this.story.history = story
    }

    getStory = (): initStoryI => this.story

    getCurrentStory = (): storyI => {
        return this.currentStory
    }

    setCurrentStory = (storyPosition: number) => {
        this.currentStory = {...this.currentStory, ...this.story.history[storyPosition]}
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

    getNoChoice = (): initStoryI => {
        return <initStoryI>this.currentStory.nochoice!
    }

    getLocalSave = (): save => {
        return JSON.parse(<string>localStorage.getItem("story"))
    }

    setLocalSave = () => {
        const localSave: save = {story: this.getStory(), id: this.getStoryPosition(), currentStory: this.currentStory}

        localStorage.setItem("story", JSON.stringify(localSave))
    }

    setStoryPosition = (position: number): void => {
        if (position >= 0 && position < this.story.history.length) {
            this.storyPosition = position
            this.setCurrentStory(this.storyPosition)
        }
    }

    incStoryPosition = (): void => {
        if (this.storyPosition < this.story.history.length - 1) {

            // console.log(toJS(this.currentStory))
            // console.log(toJS(this.story[this.storyPosition]))
            // console.log(toJS({...this.currentStory, ...this.story[this.storyPosition]}))

            this.storyPosition += 1

            this.setCurrentStory(this.storyPosition)
            this.setLocalSave()
        }
    }

    decStoryPosition = (): void => {
        if (this.storyPosition > 0) {
            this.storyPosition -= 1
            this.currentStory = {...this.currentStory, ...this.story.history[this.storyPosition]}
        }
    }

    getStoryPosition = (): number => {
        return this.storyPosition
    }
}

export default new StoreStory()