import {makeAutoObservable, toJS} from "mobx";

import bg from "../../res/backgrounds/2.png"
import char from "../../res/chars/rin/normal.png"
import TestStory from "../stories/TestStories/TestStory";
import StartStory from "../stories/chapter1/StartStory";

class StoreStory {

    protected storyPosition!: number
    protected background!: string
    protected story!: storyI[]
    protected currentStory!: storyI
    protected choices!: choiceI[] | undefined
    protected nochoice!: storyI[]
    protected chars!: Array<charsI>
    protected text!: string
    protected complete!: boolean

    constructor() {
        makeAutoObservable(this)

        this.initStory()
    }

    initStory = () => {
        this.story = TestStory()
        this.storyPosition = 0
        this.currentStory = this.story[this.storyPosition]
        this.choices = this.currentStory.choice
        this.background = bg
        this.complete = false
        this.chars = [
            {
                name: "Rin",
                src: char
            }
        ]
    }

    setStory = (story: storyI[]) => {

        story[0] = {background: this.getBackground(), characters: this.getChars(), ...story[0]}

        this.story = [...this.story, ...story]

        this.incStoryPosition()

        this.currentStory = this.story[this.storyPosition]
    }

    getStory = (): storyI => {
        return this.currentStory
    }

    setBackgorund = (src: string): void => {
        this.background = src
    }

    getBackground = (): string => {
        return this.currentStory.background!
    }

    setChars = (chars: Array<charsI>): void => {
        this.chars = chars
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

    getChoices = (): choiceI[] | undefined => {
        return this.currentStory.choice
    }

    getNoChoice = (): storyI[] => {
        return this.currentStory.nochoice!
    }

    incStoryPosition = (): void => {
        if (this.storyPosition < this.story.length - 1) {

            // console.log(toJS(this.currentStory))
            // console.log(toJS(this.story[this.storyPosition]))
            // console.log(toJS({...this.currentStory, ...this.story[this.storyPosition]}))

            this.storyPosition += 1
            this.currentStory = {...this.currentStory, ...this.story[this.storyPosition]}
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