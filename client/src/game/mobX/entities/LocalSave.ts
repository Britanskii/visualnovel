import {legend, localSave, save} from "../../interfaces/interfaces";
import getDateObj from "../../functions/getDateObj";
import StoreStory from "../stores/StoreStory";


class LocalSave {

    static getSave = () => JSON.parse(<string>localStorage.getItem("story"))

    static setSavesAll = (saves: []) => {

        const state = this.getSaveState()

        const localSave: save = {state, saves}

        localStorage.setItem("story", JSON.stringify(localSave))

        StoreStory.setSaves(saves)
    }

    static getSavesAll = () => {
        const save = this.getSave()

        if (this.isSavesHave()) {
            return save.saves
        } else {
            return []
        }
    }

    static getSavesAllId = () => {
        const saves = this.getSavesAll()

        return saves.map((save: localSave) => save.id)
    }

    static getSaveState = () => {
        const save = this.getSave()

        if (this.isSaveStateHave()) {
            return save.state
        } else {
            console.error("State is not exists")
        }
    }

    static isSaveStateHave = () => {
        const save = this.getSave()

        return !!save?.state;
    }

    static isSavesHave = () => {
        const save = this.getSave()

        return save?.saves.length > 0;
    }

    static setSave = (fastSave: boolean = false) => {
        console.log("save")

        const state: localSave = {
            story: StoreStory.getStory(),
            id: this.makeSaveId(),
            currentStory: StoreStory.getCurrentStory(),
            date: this.makeSaveDate(),
            storyPosition: StoreStory.getStoryPosition()
        }

        const saves = this.getSavesAll().length !== 0 ? this.getSave().saves : []

        const localSave: save = fastSave ? {state, saves: [...saves, state]} : {state, saves}

        localStorage.setItem("story", JSON.stringify(localSave))

        StoreStory.setSaves(localSave.saves)
    }

    static deleteSave = (id: number) => {
        const newSaves = this.getSavesAll().filter((save: localSave) => save.id !== id)

        this.setSavesAll(newSaves)
    }

    protected static makeSaveId = () => {
        const indeficators = this.getSavesAllId()

        const storyPosition = StoreStory.getStoryPosition()

        const alredyHaveIndeficator = indeficators.findIndex((indeficator: number) => indeficator === storyPosition) !== -1
        return  alredyHaveIndeficator ? indeficators.at(-1) + 1 : storyPosition
    }

    protected static makeSaveDate = () => {
        const {month, day, year, hours, minutes, seconds} = getDateObj(new Date())
        return  day + "." + month + "." + year + " " + hours + ":" + minutes + ":" + seconds
    }

}

export default LocalSave